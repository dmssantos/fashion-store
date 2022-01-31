import {Wrapper} from './style';
import thumbnail from '../../../assets/images/jaket3.png';
import arrow from '../../../assets/images/arrow2.svg';

export default function Thumbnail() {
  return(
    <Wrapper>
      <img className='thumbnail' src={thumbnail} alt="jaket" />
      <div>
        <img src={arrow} alt="arrow" />
        <img src={arrow} alt="arrow2" />
      </div>
    </Wrapper>
  )
}