import { useEffect, useState } from "react"
import { useDispatch, useSelector, connect } from "react-redux"
import * as types from "../redux/Actions/investors"
import {toastr} from 'react-redux-toastr'
// import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"
// import "./utils/css/login.css"

const mapStateToProps = (state, ownProps) => {
    return {
        investors: state.investors  
    }
}

function Main(props) {
    let navigate=useNavigate()
    let [investors, setinvestors] = useState();
    let data = useSelector((investor) => investor.fetchinvestor)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: types.FETCH_INVESTORS_REQUEST })
    }, [])
    useEffect(() => {
        setinvestors(data.investors.data)

    }, [data])
    // useEffect(()=>{
    //   navigate("/");
    // },[])
    // toastr.success("Success","data get successful")

    return (
        
            


              <div class="card">

              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item text-center">
                    <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                  </li>
                  <li class="nav-item text-center">
                    <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
                  </li>
                 
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    
                    <div class="form px-4 pt-5">
  
                      <input type="text" name="" class="form-control" placeholder="Email or Phone" />
  
                      <input type="text" name="" class="form-control" placeholder="Password" />
                      <button class="btn btn-dark btn-block">Login</button>
  
                    </div>
  
  
  
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
  
                    <div class="form px-4">
  
                      <input type="text" name="" class="form-control" placeholder="Name" />
  
                      <input type="text" name="" class="form-control" placeholder="Email" />
  
                      <input type="text" name="" class="form-control" placeholder="Phone" />
  
                      <input type="text" name="" class="form-control" placeholder="Password" />
  
                      <button class="btn btn-dark btn-block">Signup</button>
                      
  
                    </div>
  
  
  
                  </div>
                  
                 </div>
              
            
            
  
          </div>
          
  
  


        
        
        
        
    )
}


export default connect(mapStateToProps, null)(Main)