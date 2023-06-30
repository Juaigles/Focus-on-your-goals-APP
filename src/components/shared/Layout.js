import { Outlet } from "react-router";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


function Layout() {
    return ( 
        <>
     
        <Header></Header>
        <Main>
            <Outlet></Outlet>
        </Main>
        <Footer></Footer>
      </>
     );
}

export default Layout;