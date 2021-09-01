import React from 'react';
import { Route, Switch} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import routes from './routes';
import './App.css';
import Header from './components/Header';

const App = () => {

  const showMainContent = () => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map(route => {
        return (
          <Route
            // key={index}
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  }

  return (
    <div className="App">
      <Header />
      <div className="mt-5">{showMainContent()}</div> 
    </div>
  );
}

export default App;
