import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperHeader } from './styled';

const Header = () => {
  return (
    <WrapperHeader>
        <ul>
          <li className="btn btn-success">
            <Link to="/cafes">List cafe</Link>
          </li>
          <li className="btn btn-primary">
            <Link to="/cafe/add">Add more cafe</Link>
          </li>
        </ul>
      </WrapperHeader>
  );
};

export default Header;