import styled from "styled-components";

const Wrapper = styled.button`
  width: 230px;
  height: 50px;
  background: var(--whiteNormal);
  box-shadow: 0px 7px 20px rgba(121, 188, 207, 0.4);
  border-radius: 100px;
  margin-bottom: 100px;

  span {
    font-family: var(--montserrat);
    font-weight: 700;
    font-size: var(--buttom);
    color: var(--primaryColor);
  }
  img {
    margin-left:24px;
  }
`;

export {
  Wrapper
}