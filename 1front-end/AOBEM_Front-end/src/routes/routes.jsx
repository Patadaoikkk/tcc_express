// import { Fragment } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BasePage from "../pages/navPages/BasePage";
// import Home from "../pages/navPages/Home";
// import About from "../pages/navPages/About";
// import Experts from "../pages/navPages/Experts";
// import Contact from "../pages/navPages/Contact";
// import LogInRegister from "../pages/navPages/LogInRegister";
// import LogIn from "../pages/navPages/LogIn";
// import Register from "../pages/navPages/Register";
// import Triage from "../pages/navPages/Triage";
// import NotFound from "../pages/navPages/NotFound";

// import ServiceTerms from "../pages/serviceTerms";
// import PrivacyPolicy from "../pages/privacyPolicy";

// import PatientProfile from "../pages/patientDashboard/PatientProfile";
// import PartnerProfile from "../pages/partnerDashboard/PartnerProfile";
// import useAuth from "../useAuth";

// const Private = ({ Item }) => {
//     const { signed } = useAuth();
//     return signed > 0 ? <Item /> : <PatientProfile />;
// }

// function AppRoutes() {
//     return (
//         <BrowserRouter>
//             <Fragment>
//                 <Routes>
//                     {/* Rotas Aninhadas. */}
//                     <Route path="/" element={<BasePage />}>

//                         {/* Rotas públicas. */}
//                         <Route index element={<Home />}></Route>
//                         <Route path="/sobre" element={<About />}></Route>
//                         <Route path="/especialistas" element={<Experts />}></Route>
//                         <Route path="/contato" element={<Contact />}></Route>
//                         <Route path="/entrarcadastrar" element={<LogInRegister />}></Route>

//                         <Route path="/entrar" element={<LogIn />}>
//                             <Route path=":type" element={<logIn />}></Route>
//                         </Route>

//                         <Route path="/cadastrar" element={<Register />}>
//                             <Route path=":type" element={<Register />}></Route>
//                         </Route>

//                         <Route path="/triagem" element={<Triage />}></Route>
//                         <Route path="*" element={<NotFound />}></Route>

//                         {/* Regras. */}
//                         <Route path="/termos-de-servico" element={<ServiceTerms />}></Route>
//                         <Route path="/politica-de-privacidade" element={<PrivacyPolicy />}></Route>

//                         {/* Rotas privadas. */}
//                         <Route exact path="/paciente" element={<Private Item={PatientProfile} />}></Route>
//                         <Route exact path="/especialista" element={<Private Item={PartnerProfile} />}></Route>

//                     </Route>
//                 </Routes>
//             </Fragment>
//         </BrowserRouter>
//     )
// }

// export default AppRoutes