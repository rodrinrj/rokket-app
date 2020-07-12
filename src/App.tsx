import React from "react";
import RootProvider from "./redux-store/RootProvider";
import "./App.scss";
import MainContainer from "./containers/MainContainer/MainContainer";

const App: React.FC = () => {
  return (
    <RootProvider>
      <MainContainer />
    </RootProvider>
  );
};

export default App;
