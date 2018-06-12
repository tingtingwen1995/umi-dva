import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/users/components/useModal",
        "exact": true,
        "component": () => React.createElement(require('/home/tingtingwen/Documents/user-dashboard/node_modules/_umi-build-dev@0.18.4@umi-build-dev/lib/Compiling.js').default, { route: '/users/components/useModal' })
      },
      {
        "path": "/users/components/users",
        "exact": true,
        "component": () => React.createElement(require('/home/tingtingwen/Documents/user-dashboard/node_modules/_umi-build-dev@0.18.4@umi-build-dev/lib/Compiling.js').default, { route: '/users/components/users' })
      },
      {
        "path": "/users/list",
        "exact": true,
        "component": () => React.createElement(require('/home/tingtingwen/Documents/user-dashboard/node_modules/_umi-build-dev@0.18.4@umi-build-dev/lib/Compiling.js').default, { route: '/users/list' })
      },
      {
        "path": "/users/models/list",
        "exact": true,
        "component": () => React.createElement(require('/home/tingtingwen/Documents/user-dashboard/node_modules/_umi-build-dev@0.18.4@umi-build-dev/lib/Compiling.js').default, { route: '/users/models/list' })
      },
      {
        "component": () => React.createElement(require('/home/tingtingwen/Documents/user-dashboard/node_modules/_umi-build-dev@0.18.4@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.js","routes":[{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/users/components/useModal","exact":true,"component":"./src/pages/users/components/useModal.js"},{"path":"/users/components/users","exact":true,"component":"./src/pages/users/components/users.js"},{"path":"/users/list","exact":true,"component":"./src/pages/users/list.js"},{"path":"/users/models/list","exact":true,"component":"./src/pages/users/models/list.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
