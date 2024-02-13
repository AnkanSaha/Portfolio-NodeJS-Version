import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopLightMode from "./pages/DesktopLightMode";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Logosreact from "./pages/Logosreact";
import Logossass from "./pages/Logossass";
import Logosbootstrap from "./pages/Logosbootstrap";
import Cibgreensock from "./pages/Cibgreensock";
import DesktopDarkMode from "./pages/DesktopDarkMode";
import Desktop from "./pages/Desktop";
import Desktop4 from "./pages/Desktop4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/logosreact":
        title = "";
        metaDescription = "";
        break;
      case "/logossass":
        title = "";
        metaDescription = "";
        break;
      case "/logosbootstrap":
        title = "";
        metaDescription = "";
        break;
      case "/cibgreensock":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-dark-mode":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopLightMode />} />
      <Route path="/desktop-5" element={<Desktop2 />} />
      <Route path="/desktop-3" element={<Desktop3 />} />
      <Route path="/logosreact" element={<Logosreact />} />
      <Route path="/logossass" element={<Logossass />} />
      <Route path="/logosbootstrap" element={<Logosbootstrap />} />
      <Route path="/cibgreensock" element={<Cibgreensock />} />
      <Route path="/desktop-dark-mode" element={<DesktopDarkMode />} />
      <Route path="/desktop-1" element={<Desktop />} />
      <Route path="/desktop-4" element={<Desktop4 />} />
    </Routes>
  );
}
export default App;
