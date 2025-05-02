import { useEffect } from "react";

import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Layout = ({ title = "", children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
