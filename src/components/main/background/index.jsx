import {Wrapper} from './style';
import lines from '../../../assets/images/lines.png';

export default function Background() {
  return(
    <Wrapper>
      <img src={lines} alt="lines" />
    </Wrapper>
  )
}