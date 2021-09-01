import React from 'react';

import Home from './pages/Home';
import ListCafe from './pages/ListCafe';
import AddCafe from './pages/AddCafe';

const routes = [
  {
    path: '/',
    exact: true,
    private: true,
    main: () => <Home />,
  },
  {
    path: '/cafes',
    exact: true,
    private: true,
    main: () => <ListCafe />,
  },
  {
    path: '/cafe/add',
    exact: true,
    private: true,
    main: () => <AddCafe />,
  },
];

export default routes;
