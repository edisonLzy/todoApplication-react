import { Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoutesConfig, { RouteConfig } from '@/router';

function RenderRoute(route: RouteConfig[]) {
  return route.reduce((acc, cur) => {
    if (cur.routes && cur.routes.length > 0) {
      const temp = RenderRoute(cur.routes);
      acc.push(...temp);
    }
    const RoutDom = (
      <Route
        key={cur.path as string}
        render={() => {
          const { component: Component } = cur;
          return <Component />;
        }}
      ></Route>
    );
    acc.push(RoutDom);
    return acc;
  }, [] as React.ReactNode[]);
}
function App() {
  const renderRoute = useMemo(() => {
    return RenderRoute([RoutesConfig]);
  }, [RoutesConfig]);
  return (
    <Router>
      <Suspense fallback={<h1>loading</h1>}>
        <Switch>{renderRoute}</Switch>
      </Suspense>
    </Router>
  );
}
export default App;
