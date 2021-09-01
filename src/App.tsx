import React from "react";

type Props = {
  name: string;
};

const App = ({ name }: Props) => {
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
};

export default App;
