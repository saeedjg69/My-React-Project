import { PanelSidebar } from "../components"
import UserRouteConfig from "../../core/routing/UserRouteConfig";

const Panel = () => {
 return (
  <div className="Panel my-6 overflow-hidden">
   <div className="lg:w-1/4 lg:float-right px-4">
    <PanelSidebar />
   </div>
   <div className="lg:w-3/4 lg:float-left px-4">
    <div className="rounded-lg border mt-4 lg:mt-0 md:min-h-[590px] shadow-lg text-mydarkblue p-10">
     <UserRouteConfig />
    </div>
   </div>
  </div>
 );
};

export default Panel;
