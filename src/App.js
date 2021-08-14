import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routes from "./router";
import Dashboard from "./containers/dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <Dashboard />
        {/* <Routes /> */}
      </>
    </Provider>
  );
}

export default App;
