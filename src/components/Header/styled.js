import styled from "styled-components";

export const WrapperHeader = styled.header`
  background-color: #f1f1f1;
  height: 70px;

  ul {
    list-style: none;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin-right: 20px;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`