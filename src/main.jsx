import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1. import `NextUIProvider` component (Provider Setup)
import { NextUIProvider } from "@nextui-org/react";

// 2. Wrap NextUIProvider at the root of your app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
