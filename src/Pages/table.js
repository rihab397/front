import { useEffect, useState } from "react";
import * as _ from "lodash"
import update from 'immutability-helper';
import Axios from "./axiosInterceptor";
import { Table, Button } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
function App() {
  let [apiData, setapiData] = useState()
  let [investors, setinvestors] = useState();
  let data = useSelector((investor) => investor.fetchinvestor)
  let dispatch = useDispatch();
  useEffect(() => {
      dispatch({ type: types.FETCH_INVESTORS_REQUEST })
  }, [])
  useEffect(() => {
      setinvestors(data.investors.data)

  }, [data])
  useEffect(() => {
    Axios('todos').then(val => {
      setapiData(Array.isArray(val.data) ? val.data : [val.data])
      // console.log(val.data);
    }).catch(er => console.log(er))
  }, [])

  function updateTitle(e, index, key) {
    let newdata = _.cloneDeep(apiData)
    let d = { data: newdata }
    let news = update(d, {
      data: {
        [index]: {
          [key]: { $set: e.target.value }
        }
      }
    })
    setapiData(news.data)
  }

  function returnControl(data, index) {
    console.log(data);
    return (
      <tr style={{ listStyle: "none", paddingTop: "3px" }}>
        {Object.entries(data).filter(([key])=>key!="emptyField").map(([key, value]) => (
          <td >
            <input className="form-control" type="text" style={{ border:data.emptyField && data.emptyField.some(v=>v===key)?"1px solid red":"none", outline: "none" }} value={value} onChange={(e) => {
              updateTitle(e, index, key)
            }} />
          </td>
        ))
        }
      </tr>
    )
  }
  function validate(e) {
    e.preventDefault();
    let apiData2 = _.cloneDeep(apiData);

    apiData2.map(val => {
      let emptyField = []
      Object.keys(val).map((key) => {
        if ( val[key]==="" || val[key]===(undefined || null || NaN)) emptyField.push(key);
      })
      val.emptyField = emptyField
    })

    setapiData(apiData2);
  }
  return (
    <>
         {JSON.stringify(investors)}
      <div className="container">
        {
          apiData && apiData.length && <>{

            <table className="table table-bordered">
              <thead>
                <tr className="header bg-primary color-light">
                  {
                    Object.keys(apiData[0]).filter(key=>key!="emptyField").map(val => (
                      <td>{val}</td>
                    ))
                  }
                </tr>
              </thead>
              {
                apiData.map((val, index) => (
                  returnControl(val, index)
                ))
              }
            </table >
          }</>
        }
      </div>
      <Button color="primary" onClick={(e) => validate(e)}>validate</Button>
    </>
  );
}

export default App;
