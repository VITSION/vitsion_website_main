import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { pingBackend } from "./lib/pingBackend";

// Wake up Render backend
pingBackend();

createRoot(document.getElementById("root")!).render(<App />);
