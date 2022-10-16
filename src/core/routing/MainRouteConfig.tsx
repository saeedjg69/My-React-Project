import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {
 Panel,
 CoursesPage,
 CoursePage,
 NewsPage,
 TeachersPage,
 News,
} from "../../UI/pages";
import {
 Header,
 Footer,
 LoginStudent,
 LoginEmployee,
 RegisterStudent,
 RegisterEmployee,
 NotFound,
 ForgetPass,
 Rules,
 Questions,
 ContactUs,
 AboutUs,
} from "../../UI/components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LandingPage = React.lazy(() => import("../../UI/pages/LandingPage"));

const RouteConfig = () => {
 return (
  <React.Suspense fallback={<h1>loading ...</h1>}>
   <Routes>
    <Route path="" element={<Layout1 />}>
     <Route path="" element={<LandingPage />} />
     <Route path="LoginStudent" element={<LoginStudent />} />
     <Route path="LoginEmployee" element={<LoginEmployee />} />
     <Route path="RegisterStudent" element={<RegisterStudent />} />
     <Route path="RegisterEmployee" element={<RegisterEmployee />} />
     <Route path="ForgetPass" element={<ForgetPass />} />
     <Route path="Rules" element={<Rules />} />
     <Route path="Questions" element={<Questions />} />
     <Route path="ContactUs" element={<ContactUs />} />
     <Route path="AboutUs" element={<AboutUs />} />
     <Route path="CoursesPage" element={<CoursesPage />} />
     <Route path="CoursesPage/:id" element={<CoursePage />} />
     <Route path="NewsPage" element={<NewsPage />} />
     <Route path="NewsPage/:id" element={<News />} />
     <Route path="TeachersPage" element={<TeachersPage />} />

     <Route path="" element={<PrivateOutlet />}>
      <Route path="Panel/*" element={<Panel />} />
     </Route>

     <Route path="*" element={<NotFound />} />
     <Route path="NotFound" element={<NotFound />} />
    </Route>
   </Routes>
  </React.Suspense>
 );
};

export default RouteConfig;

function Layout1() {
 return (
  <>
   <Header />
   <Outlet />
   <Footer />
  </>
 );
}

function PrivateOutlet() {
 const { user } = useSelector((state: RootState) => state.user);
 if (user) return <Outlet />;
 return <Navigate to="/NotFound" />;
}
