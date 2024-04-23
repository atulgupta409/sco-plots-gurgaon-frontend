import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { ApolloProvider } from "@apollo/client";
import client from "./Client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HelmetProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </HelmetProvider>
  // </React.StrictMode>
);

reportWebVitals();
