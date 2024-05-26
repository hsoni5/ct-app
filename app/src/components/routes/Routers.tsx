// Layouts
import { Route, Routes } from "react-router-dom";
import AnonymousLayout from "../layouts/AnonymousLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Services from "../pages/public/Services";
import Testimonials from "../pages/public/Testimonials";
import AuthLayout from "../layouts/AuthLayout";
import Homepage from "../pages/public/Homepage";
import AuthPage from "../pages/auth/AuthPage";


export  const  Routers = () => {

return (
    <>
      <Routes>
          <Route path="/" element={<AnonymousLayout />}>
            <Route index element={<Homepage/>} />
            <Route path="services" element={<Services />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/auth/" element={<AuthLayout/>}>
             <Route index element={<AuthPage />} />
             <Route path="" element={<Login />} />
             <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route> 
        </Routes>
     </>
)

}
export default Routers;

