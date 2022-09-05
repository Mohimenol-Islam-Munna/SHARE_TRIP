import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
