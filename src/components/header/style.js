import styled from "styled-components";

import store from '../../assets/images/store.svg';

const Wrapper = styled.header`
  width: 100%;
  height: 100px;

  padding: 0 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 157px;
  height: 44px;

  background: url(${store}) no-repeat left center;

  h1 {
    font-family: var(--montserrat);
    font-size: var(--logo);
    font-weight: var(--semi-bold);
    color: var(--blackLogo);
    margin-left: 59px;
  }
`;

const Menu = styled.menu`
  width: 630px;
  height: 63px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul{
    width: 530px;
    display: flex;
    justify-content: space-around;

    li{
      font-family: var(--montserrat);
      font-size: var(--menu);
      font-weight: var(--semi-bold);
      color: var(--blackMenu);
    }
  }

  img {
    margin-left: 68px;
  }
`;

export {
  Wrapper,
  Logo,
  Menu
};