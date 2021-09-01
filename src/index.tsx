import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./auth/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App name="React Typescript Tailwind" />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
