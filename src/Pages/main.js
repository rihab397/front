import { useEffect, useState } from "react"
import { useDispatch, useSelector, connect } from "react-redux"
import * as types from "../redux/Actions/investors"
import {toastr} from 'react-redux-toastr'
import {toast} from 'react-toastify'
const mapStateToProps = (state, ownProps) => {
    return {
        investors: state.investors  
    }
}

function Main(props) {
    let [investors, setinvestors] = useState();
    let data = useSelector((investor) => investor.fetchinvestor)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: types.FETCH_INVESTORS_REQUEST })
    }, [])
    useEffect(() => {
        setinvestors(data.investors.data)

    }, [data])
    // toastr.success("Success","data get successful")

    return (
        <>
            {JSON.stringify(investors)}
            <p>hello</p>
            <button 
            onClick={()=>{toast("lkshlk");
            console.log("sfsdf")
            toastr.success("Success","data get successful")
              }}> sss</button>
        </>
    )
}


export default connect(mapStateToProps, null)(Main)