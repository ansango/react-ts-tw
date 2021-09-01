import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const Login = () => {
  return <div>Loggin</div>;
};

export const Home = () => {
  return <div>HOME</div>;
};

export const RouterEl = () => {
  const { logged } = useAuth();

  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={Login} isAuth={logged} />
        <PrivateRoute path="/" component={Home} isAuth={logged} />
      </Switch>
    </Router>
  );
};
