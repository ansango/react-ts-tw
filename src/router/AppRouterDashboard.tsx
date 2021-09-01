import { Redirect, Route, Switch } from "react-router-dom";

export const Home = () => {
  return <div>HOME</div>;
};

const AppRouterDashboard = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default AppRouterDashboard;
