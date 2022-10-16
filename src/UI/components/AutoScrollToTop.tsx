import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AutoScrollToTop({ children }: any) {
 const { pathname } = useLocation();

 useEffect(() => {
  if (pathname != "/contact") window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
 }, [pathname]);

 return children;
}

export default AutoScrollToTop;
