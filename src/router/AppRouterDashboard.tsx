import { Redirect, Route, Switch } from "react-router-dom";
import { Home } from "../components";

const AppRouterDashboard = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default AppRouterDashboard;
