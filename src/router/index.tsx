import { RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { lazy } from 'react';
export interface RouteConfig extends RouteProps {
  routes?: this[];
  component: any;
}
const routesConfig: RouteConfig = {
  path: '/',
  component: <Redirect to="/home" from="/" />,
  routes: [
    {
      exact: true,
      path: '/home',
      component: lazy(() => import('@/pages/Home')),
    },
  ],
};
export default routesConfig;
