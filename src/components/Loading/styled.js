import styled from "styled-components";

export const WrapperLoading = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background-color: #fff;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 300px;
  
  div {
    height: 100%;
  }

  svg {
    position: absolute;
    bottom: 0;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    background-color: #fff;
    z-index: 1;
  }
}
`