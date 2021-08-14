import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routes from "./router";
import Topbar from "./containers/Sidebar/topbar";
import Sidebar from "./containers/Sidebar/sidebar";

function App() {
  return (
    <Provider store={store}>
      <>
        <Topbar />
        <Sidebar />
        <Routes />
      </>
    </Provider>
  );
}

export default App;
