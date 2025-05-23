import { StrictMode } from "react";
import { GameProvider } from "./GameContext";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);
