import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComp() {
  return <div>child component</div>;
}

function App() {
  return (
    <div>
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
