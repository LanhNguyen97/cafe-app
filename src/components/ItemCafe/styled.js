import styled from "styled-components";

export const WrapperItemCafe = styled.div`
  border: solid 1px #f1f1f1;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgb(0, 0, 0, 0.1);
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.12);
  }

  .wrapper-image {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: auto;
      height: 80%;
    }
  }

  .wrapper-info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-top: solid 1px #f1f1f1;
    padding: 7px 10px;
    text-align: center;

    span {
      width: 50%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`