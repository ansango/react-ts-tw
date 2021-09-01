import React, { createElement } from "react";
import { Redirect, Route } from "react-router-dom";

type Props = {
  isAuth?: boolean;
  exact?: boolean;
  path: string;
  component: React.FC;
};

const PrivateRoute = ({ isAuth, component, ...rest }: Props) => {
  const routeComponent = (props: any) =>
    isAuth ? createElement(component, props) : <Redirect to="/login" />;
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
