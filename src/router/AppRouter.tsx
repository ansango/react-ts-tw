import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { Login } from "../components";

import AppRouterDashboard from "./AppRouterDashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {
  const { logged } = useAuth();

  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={Login} isAuth={logged} />
        <PrivateRoute path="/" component={AppRouterDashboard} isAuth={logged} />
      </Switch>
    </Router>
  );
};
