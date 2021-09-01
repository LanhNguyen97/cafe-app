import React from 'react';
import { Link } from 'react-router-dom';

import { WrapperHome } from './styled';

const Home = (props) => {
  return (
    <WrapperHome>
      <h1>Hello, welcome to dashboard</h1>
      <span><Link to="/cafes">See list page</Link></span>
    </WrapperHome>
  );
};

export default Home;