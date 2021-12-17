import styled from 'styled-components';
import Title from '../../components/title/index';
import Button from '../../components/button/index';
import Thumbnail from '../../components/thumbnail/index';
import Social from '../../components/social/index';
import Product from '../../components/product/index';

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  z-index: 1;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  padding: 50px 80px;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title />
      <Button />
      <Social />
      <Thumbnail />
      {/* <Product /> */}
    </Wrapper>
  )
};
