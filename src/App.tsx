import { RouterEl } from "./router/Router";

type Props = {
  name: string;
};

const App = ({ name }: Props) => {
  return (
    <div className="App">
      <h1>{name}</h1>
      <RouterEl />
    </div>
  );
};

export default App;
