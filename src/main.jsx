import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import PreLoader from "./components/PreLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
);
