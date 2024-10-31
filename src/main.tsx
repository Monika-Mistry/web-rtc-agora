import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Client from "./components/Client.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Client>
      <App />
    </Client>
  </StrictMode>
);
