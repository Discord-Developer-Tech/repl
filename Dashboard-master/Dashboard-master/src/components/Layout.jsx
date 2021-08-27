import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <div className="mx-auto min-h-screen">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
