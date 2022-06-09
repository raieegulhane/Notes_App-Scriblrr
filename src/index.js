import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/auth-context";
import { ComponentProvider } from "./contexts/component-context";
import { NoteProvider } from "./contexts/note-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NoteProvider>
          <ComponentProvider>
            <App />
          </ComponentProvider>
        </NoteProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
