import { Wrapper } from './style';
import product from '../../../assets/images/product.svg';

export default function Product() {
  return (
    <Wrapper>
      <img src={product} alt="jaket" />
    </Wrapper>
  )
}