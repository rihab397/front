import store from "./redux/index";
import {Provider} from "react-redux"
import Main from "./Pages/main";
function App() {
  return (
   <Provider store={store}>
      <Main />
   </Provider>
  );
}

export default App;
