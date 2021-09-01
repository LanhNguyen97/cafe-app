import React from 'react';
import Loader from "react-loader-spinner";
import { WrapperLoading } from './styled';

const Loading = () => {
  return (
    <WrapperLoading>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={1000000} //3 secs
        />
      </WrapperLoading>
  );
};

export default Loading;