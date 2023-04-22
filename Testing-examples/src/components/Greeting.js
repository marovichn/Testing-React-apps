import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handler = () => {
    setChangedText(!changedText);
  };
  return (
    <div>
      <h1>Hello everyone</h1>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed</p>}
      <button onClick={handler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
