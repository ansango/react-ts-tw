import { AppRouter } from "./router/AppRouter";

type Props = {
  name: string;
};

const App = ({ name }: Props) => {
  return (
    <div className="App">
      <h1>{name}</h1>
      < AppRouter/>
    </div>
  );
};

export default App;
