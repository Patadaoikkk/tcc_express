import Header from "../../../components/Header";
import Nav from "../../../components/Nav";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from './BasePage.module.css'
// import { AuthProvider } from "../../auth";

function BasePage() {
    return (
        <>
            <Header />
            <Container>
                {/* <h1 className={styles.t}>Eu sou a BasePage!</h1> */}
                {/*  <Outlet />: Aqui ficará os conteúdos das páginas. Indica uma rota filha. */}
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default BasePage