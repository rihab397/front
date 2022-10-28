import store from "./redux/index";
import { Provider } from "react-redux"
// import Main from "./Pages/main";
// import Header from "./Pages/utils/sidebar";
import Sidenav from './Pages/utils/Sidenav'
import { Routers } from "./Pages/utils/routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routers />
   
        <Sidenav />
      
    </BrowserRouter>
    </Provider>
  );
}

export default App;
