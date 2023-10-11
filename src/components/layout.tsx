import { ReactNode } from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
