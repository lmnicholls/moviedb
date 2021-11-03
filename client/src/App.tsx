import React from "react";
import { AppContainer } from "./AppStyles";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App = () => {
  const [show, setShow] = React.useState<boolean>(true);

  return (
    <AppContainer>
      <Header show={show} setShow={setShow} />
      <Search show={show} setShow={setShow} />
    </AppContainer>
  );
};

export default App;
