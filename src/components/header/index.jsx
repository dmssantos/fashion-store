import {Wrapper, Logo, Menu} from './style';

import cart from '../../assets/images/cart.svg';



export default function Header() {
  return(
    <Wrapper>
      <Logo>
        <h1>Store</h1>
      </Logo>
      <Menu>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>
        <img src={cart} alt="cart" />
      </Menu>
    </Wrapper>
  )
}