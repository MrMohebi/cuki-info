//modals
import {BrowserRouter,Route} from "react-router-dom";
//components
import MainComponent from "./Components/MainComponent/MainComponent";

//others
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'


function App() {
  return (
    <>
    <BrowserRouter>
      <Route path={"/home"} component={MainComponent}/>
    </BrowserRouter>
    </>
  );
}

export default App;
