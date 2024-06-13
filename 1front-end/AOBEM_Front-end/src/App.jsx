import './App.css'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from './pages/RequireAuth';
import BasePage from "./pages/navPages/BasePage";

// Componentes globais.
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas do menu.
import Home from "./pages/navPages/Home";
import About from "./pages/navPages/About";
import Experts from "./pages/navPages/Experts";
import Contact from "./pages/navPages/Contact";
import LogIn from "./pages/navPages/LogIn";
import Register from "./pages/navPages/Register";
import Triage from "./pages/navPages/Triage";

// Páginas do site.
import Thanks from "./pages/webPages/Thanks";

import ForgotPassword from './pages/webPages/ForgotPassword';
import ResetPassword from './pages/webPages/ResetPassword';

import Unauthorized from './pages/webPages/Unauthorized';
import ServiceTerms from "./pages/webPages/serviceTerms";
import PrivacyPolicy from "./pages/webPages/privacyPolicy";
import NotFound from "./pages/webPages/NotFound";

// Páginas que requerem autorização.
import MemberHomePage from './pages/memberDashboard/MemberHomePage';
import MemberProfilePage from './pages/memberDashboard/MemberProfilePage';

import ExpertHomePage from './pages/expertDashboard/ExpertHomePage';
import ExpertProfilePage from './pages/expertDashboard/ExpertProfilePage';

const ROLES = {
  'Member': 1000,
  'Expert': 2000
}

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<BasePage />}>

          {/* Rotas públicas. */}
          <Route element={<Header />} />

          {/* Páginas do menu. */}
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<About />}></Route>
          <Route path="/especialistas" element={<Experts />}></Route>
          <Route path="/contato" element={<Contact />}></Route>
          <Route path="/entrar" element={<LogIn />}>
            <Route path=":type" element={<LogIn />}></Route>
          </Route>
          <Route path="/cadastrar" element={<Register />}>
            <Route path=":type" element={<Register />}></Route>
          </Route>
          <Route path="/triagem" element={<Triage />}></Route>

          {/* Para estilizar. */}
          <Route path="/especialista" element={<ExpertHomePage />}></Route>

          {/* Páginas do site. */}
          <Route path="/obrigado-pelo-contato" element={<Thanks />}></Route>

          <Route path="/esqueceu-a-senha-membro" element={<ForgotPassword />}></Route>
          {/* <Route path="/redefinir-a-senha-membro/:id/:token" element={<ResetPassword />}></Route> */}
          <Route path="/redefinir-a-senha-membro" element={<ResetPassword />}></Route>

          <Route path="/nao-autorizado" element={<Unauthorized />}></Route>
          <Route path="/termos-de-servico" element={<ServiceTerms />}></Route>
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route element={<Footer />} />
        </Route>

        {/* Rotas privadas. */}
        {/* Páginas do membro. */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Member]} />}>
          <Route path="/membro" element={<MemberHomePage />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Member]} />}>
          <Route path="/membro" element={<MemberProfilePage />}></Route>
        </Route>

        {/* Páginas do especialista. */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Expert]} />}>
          <Route path="/especialista" element={<ExpertHomePage />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Expert]} />}>
          <Route path="/especialista" element={<ExpertProfilePage />}></Route>
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </>
  )
}

export default App