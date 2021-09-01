import { useAuth } from "./auth/AuthProvider";

type Props = {
  name: string;
};

const App = ({ name }: Props) => {
  const { user, login, logout, logged } = useAuth();

  return (
    <div className="App">
      <h1>{name}</h1>
      {logged && <h2>{user.email}</h2>}
      <button onClick={() => login({ email: "ansango@a.es" })}>Login</button>
      {logged && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default App;
