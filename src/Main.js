import {  useSelector } from "react-redux"

import Sidenav from './Pages/utils/Sidenav'
import { Routers } from "./Pages/utils/routes";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./Pages/utils/spinner/spinner";
import Footer from "./Pages/utils/footer";
function Main() {
 let {loader}= useSelector((state)=>state.Loader);
  return (
     
     <>    <BrowserRouter>  {
        loader ? <Spinner color="blue" />:
    
     <><Routers /> <Sidenav />
     {/* <Footer /> */}
     </>
      }
       </BrowserRouter>
      </>
     
  );
}

export default Main;


// "Email":"Rishab123@gmail.com",
// "Password":"Rishab@890"