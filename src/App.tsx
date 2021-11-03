import React from "react";
import "./AppStyles.js";
import { AppContainer } from "./AppStyles.js";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App = () => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <AppContainer>
      <Header show={show} setShow={setShow} />
      <Search show={show} setShow={setShow} />
    </AppContainer>
  );
};

export default App;
