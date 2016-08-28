import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import List from './List/List';
import Article from './Article/Article';

export const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="/articles/:id" component={Article} />
    </Route>
  </div>
);
