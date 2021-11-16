import styled from "styled-components";

import store from '../../assets/images/store.svg';
import cart from '../../assets/images/cart.svg'

const Wrapper = styled.header`
  width: 100vw;
  height: 10vh;
  padding: 0 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;

  img {
    width: 36px;
  }

  h1{
    font-size: 2.25rem;
    color: var(--black1);
    margin-left: 23px;
    font-family: var(--font1);
  }
`;

const Menus = styled.ul`
  display: flex;
  flex-direction: row;

  ul {
    width: 530px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    li {
      padding: 3px 5px;
      font-size: 1.12rem;
      font-family: var(--font1);
      font-weight: 800;
      color: var(--black2);
    }

    li:hover {
      cursor:pointer;
      color: var(--hover-color);
    }
  }

  img {
    width: 32px;
    height: 30px;
    margin-left: 68px;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src={store} alt="store" />
        <h1>Store</h1>
      </Logo>

      <Menus>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>

        <img src={cart} alt="cart" />
      </Menus>
    </Wrapper>
  )
};
