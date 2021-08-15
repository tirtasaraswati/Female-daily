import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dashboard from "./containers/dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <Dashboard />
      </>
    </Provider>
  );
}

export default App;
