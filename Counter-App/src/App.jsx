import React, { useEffect } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import "./App.css";
import { useState, useRef } from "react";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("Component updated");
  //   }
  // });

  return (
    <div>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input value={text} onChange={handleSetText} />
        </section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 && <Even />}
        </section>
        <section>
          <Controller handleSetCount={handleSetCount} />
        </section>
      </div>
    </div>
  );
}

export default App;
