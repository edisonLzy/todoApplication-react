import { RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { ComponentType, lazy } from 'react';
export interface RouteConfig extends RouteProps {
  routes?: this[];
  component: ComponentType<{
    routes?: RouteConfig[];
  }>;
}
const routesConfig: RouteConfig = {
  path: '/',
  component: () => <Redirect to="/home" from="/" />,
  routes: [
    {
      exact: true,
      path: '/home',
      component: lazy(
        () => import(/* webpackChunkName: 'home' */ '@/pages/Home')
      ),
    },
  ],
};
export default routesConfig;
