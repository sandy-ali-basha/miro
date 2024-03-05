import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./header/NavBar";
import { settingsStore } from "store/settingsStore";
import i18n from "i18n";

const Layout = ({ children }) => {

  const [lang, setLang] = useState(localStorage?.getItem("i18nextLng"));

  return (
    <div>
      <NavBar />
      {children}
      {/* todo add footer  */}
      <Footer />
    </div>
  );
};

export default Layout;
