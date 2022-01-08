import {Wrapper} from './style';

import instagram from '../../../assets/images/instagram.svg';
import facebook from '../../../assets/images/facebook.svg';
import telegram from '../../../assets/images/send.svg';

export default function Social() {
  return(
    <Wrapper>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={telegram} alt="telegram" />
    </Wrapper>
  )
}