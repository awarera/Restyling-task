import React from 'react';
import { makeRouteConfig, Route } from 'found/lib';
import { HomePage, NotFoundPage } from '../pages';

export default makeRouteConfig(
  <Route path="/">
    <Route
      Component={HomePage}
      title="home"
    />
    <Route
      Component={NotFoundPage}
      path="*"
      title="notFound"
    />
  </Route>,
);
