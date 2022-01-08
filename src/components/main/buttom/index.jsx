import {Wrapper} from './style';

import arrow from '../../../assets/images/arrow1.svg';

export default function Buttom() {
  return(
    <Wrapper>
      <span>BUY NOW</span>
      <img src={arrow} alt="arrow" />
    </Wrapper>
  )
}