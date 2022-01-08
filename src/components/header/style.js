import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: red;
`;

const Logo = styled.div`
  width: 157px;
  height: 44px;

  background: blue;
`;

const Menu = styled.menu`
  width: 630px;
  height: 63px;

  background: yellow;
`;

export {
  Wrapper,
  Logo,
  Menu
};