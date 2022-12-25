import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persist = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persist}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </>
);
