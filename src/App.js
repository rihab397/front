import store from "./redux/index";
import { Provider } from "react-redux"
import Main from "./Main";
import ReduxToastr from 'react-redux-toastr'
function App() {
  return (
    <Provider store={store}>
     <Main />
     {/* <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/> */}
    </Provider>
  );
}

export default App;
