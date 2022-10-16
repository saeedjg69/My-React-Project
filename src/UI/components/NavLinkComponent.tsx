import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, title }: any) => {
 return (
  <NavLink
   to={`${to}`}
   className={({ isActive }: any) =>
    isActive
     ? "text-mygreen md:after:!w-full md:after:!left-0 py-2 px-7 hover:bg-white hover:md:bg-mylightblue duration-200 block md:p-0 cursor-pointer hover:text-mygreen relative after:absolute after:w-0 after:xl:h-[2px] after:h-[1px] after:left-1/2 after:bottom-[-10px] after:bg-mygreen after:transition-[all,0.2s,ease-in-out] md:hover:after:w-full md:hover:after:left-0"
     : "py-2 px-7 hover:bg-white hover:md:bg-mylightblue duration-200 block md:p-0 cursor-pointer hover:text-mygreen relative after:absolute after:w-0 after:xl:h-[2px] after:h-[1px] after:left-1/2 after:bottom-[-10px] after:bg-mygreen after:transition-[all,0.2s,ease-in-out] md:hover:after:w-full md:hover:after:left-0"
   }
  >
   {title}
  </NavLink>
 );
};

export default NavLinkComponent;
