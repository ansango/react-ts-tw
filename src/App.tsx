import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <AppRouter />
    </div>
  );
};

export default App;
