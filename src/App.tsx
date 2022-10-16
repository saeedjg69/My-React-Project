import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRouteConfig from "./core/routing/MainRouteConfig";
import { AutoScrollToTop } from "./UI/components";

const App = () => {
 return (
  <BrowserRouter>
   <div className="w-11/12 mx-auto">
    <MainRouteConfig />
   </div>
   <ToastContainer autoClose={1500} />
   <AutoScrollToTop/>
  </BrowserRouter>
 );
};

export default App;
