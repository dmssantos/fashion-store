import styled from 'styled-components';

import jaketGreen from '../../assets/images/jaket4.png';
import jaketBlack from '../../assets/images/jaket1.png';
import jaketRose from '../../assets/images/jaket2.png';


const Wrapper = styled.div`
  width: 617px;
  height: 165px;
  background: red;
`;

const Balls = styled.div`
  width: 32px;
  height: 32px;
  background: var(--white);
`;

const Product = () => {
  return(
    <Wrapper>
      <Balls />
    </Wrapper>
  )
}

export default Product;