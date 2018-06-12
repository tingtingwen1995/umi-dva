import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';
import _dvaDynamic from 'dva/dynamic';


let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: 'src__layouts__index' */'../../layouts/index.js'),
}),
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: 'src__pages__index' */'../index.js'),
})
      },
      {
        "path": "/users/components/useModal",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'src__pages__users__models__list.js' */'/home/tingtingwen/Documents/user-dashboard/src/pages/users/models/list.js')
],
  component: () => import(/* webpackChunkName: 'src__pages__users__components__useModal' */'../users/components/useModal.js'),
})
      },
      {
        "path": "/users/components/users",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'src__pages__users__models__list.js' */'/home/tingtingwen/Documents/user-dashboard/src/pages/users/models/list.js')
],
  component: () => import(/* webpackChunkName: 'src__pages__users__components__users' */'../users/components/users.js'),
})
      },
      {
        "path": "/users/list",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'src__pages__users__models__list.js' */'/home/tingtingwen/Documents/user-dashboard/src/pages/users/models/list.js')
],
  component: () => import(/* webpackChunkName: 'src__pages__users__list' */'../users/list.js'),
})
      },
      {
        "path": "/users/models/list",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'src__pages__users__models__list.js' */'/home/tingtingwen/Documents/user-dashboard/src/pages/users/models/list.js')
],
  component: () => import(/* webpackChunkName: 'src__pages__users__models__list' */'../users/models/list.js'),
})
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
