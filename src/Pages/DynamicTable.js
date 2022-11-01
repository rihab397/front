import { Table } from "reactstrap";
import _ from "lodash"
import update from "immutability-helper"
import { useState } from "react";
import { useEffect } from "react";
import * as types from "../redux/Actions/vendor"
import {Modal,ModalBody,ModalHeader,ModalFooter} from "reactstrap";
import { useSelector,useDispatch } from "react-redux";

export default function DynamicTable(props) {

    let tableJson = {
        initialField: [{ usercost: "usercost" }, { externalcost: "externalcost" }, { vendorcost: "vendorcost" }, { internalcost: "internalcost" }]
    }
    let intialvendor=[{ name: "u1",isChange: false, disabled: true,cost:[] }, { name: "u2" , isChange: false, disabled: true,cost:[]}, { name: "u3",isChange: false, disabled: true,cost:[] }];
    let [vendors, setVendors] = useState(intialvendor)
    let [modalFlag,setModalFlag]=useState(false)
    let vendorData=useSelector((state)=>state.fetchVendor)
    useEffect(() => {
        if(vendorData && vendorData.vendors && vendorData.vendors.length){
         setVendors(vendorData.vendors)
        }
     }, [])
    useEffect(() => {
       if(vendorData && vendorData.vendors && vendorData.vendors.length){
        setVendors(vendorData.vendors)
       }
    }, [vendorData])
    let dispatch=useDispatch()

    function disableField(index, key, val, costType) {
        let tempVendor = _.cloneDeep({ data: vendors });
        let tempVendor2;
        let vendorIndex = tempVendor.data[index]["cost"].findIndex(val => val.name === costType);
        if (costType && tempVendor.data[index]["cost"].length && vendorIndex!=-1) {
            let vendorC = tempVendor.data[index]["cost"].find(val => val.name === costType);
            tempVendor2 = update(tempVendor, {
                data: {
                    [index]: {
                        ["cost"]: {
                            [vendorIndex]: { 
                                ["value"]: {$set:val},
                                // ["previousvalue"]
                            }
                        }
                    }
                }
            })
        }
        else if (costType) {
            tempVendor2 = update(tempVendor, {
                data: {
                    [index]: {
                    ["cost"] :{
                         $push:[{ name: costType, value: val }]}
                        // ["cost"]: { $push:  }
                    }
                }
            })
        }
        else {
            tempVendor2 = update(tempVendor, {
                data: {
                    [index]: {
                        [key]: { $set: val }
                    }
                }
            })
        }

        setVendors(tempVendor2.data)
        dispatch({type:types.SET_VENDORS,payload:tempVendor2.data})
    }
   function returnVendorData(i,key){
   return vendorData && vendorData.vendors && vendorData.vendors[i][key]?vendorData.vendors[i][key] :vendors[i][key]
   }
    return (
        <>
            {/* {JSON.stringify(vendors)} */}
            <Table border="1" >
                <tbody className="bg-primary color-light">
                    {
                        <tr >
                            <td colSpan={2}>Type of Cost</td>
                            {
                                vendors.map((val, i) => (
                                    <td>{
                                        val.isChange ? 
                                         vendors &&
                                            <input type="text"
                                                value={returnVendorData(i,"name")}
                                                onChange={(e) => {
                                                    // vendors[i]["name"] = e.target.value;
                                                    // setVendors(vendors)
                                                    disableField(i, 'name', e.target.value)
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key == "Enter") {
                                                        disableField(i, 'isChange', !val['isChange'])
                                                    }
                                                }}
                                                onBlur={(e) => disableField(i, 'isChange', !val['isChange'])}
                                            /> : <>
                                                {val.name}
                                                <button
                                                    className="btn btn primary"
                                                    onClick={(e) => disableField(i, 'disabled', !val['disabled'])}>o</button>
                                                <button
                                                    className="btn btn primary"
                                                    onClick={(e) => disableField(i, 'isChange', !val['isChange'])}>c</button>
                                            </>
                                    }
                                    </td>
                                ))
                            }
                        </tr>
                    }
                </tbody>
                { 
                          
                       
                    tableJson.initialField.map(val => (
                        <tr>
                            <td>{Object.keys(val)[0]}</td>
                            <td></td>
                           
                            { 
                                vendors.map((vendor, i) => (
                                    <td><input type="number"
                                        className="form-control"
                                        value={
                                            vendor.cost.length && vendor.cost.length && vendor.cost.some(v=>v.name==Object.keys(val)[0]) ?vendor.cost.find(v=>v.name==Object.keys(val)[0]).value :""
                                        }
                                        style={{ outline: "none", border: "none" }}
                                        disabled={vendor.disabled ? true : false}
                                        onChange={(e) => {
                                            disableField(i, 'name',parseInt( e.target.value),Object.values(val)[0])
                                        }} /></td>
                                ))
                            }

                        </tr>
                    ))
                }
                {<tr><td colSpan="2">totalcost</td>
                    {
                    vendors.map((vendor, i) => (<td>
                        { vendor.cost && vendor.cost.length && vendor.cost.map((val)=>val.value?val.value:0).reduce((a,b)=>a+b)}
                    </td>
                    ))
                }</tr>
                }
            </Table>
            <Modal isOpen={modalFlag} >
                {

                }
            </Modal>
        </>
    )

}