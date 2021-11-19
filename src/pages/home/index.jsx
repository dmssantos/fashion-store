import styled from 'styled-components';
import Title from '../../components/title/index';
import Button from '../../components/button/index';
import Thumbnail from '../../components/thumbnail/index';

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  z-index: 1;

  display: flex;
  flex-direction: row;
`;

const Column = styled.div`

`;

export default function Home() {
  return (
    <Wrapper>
      <Column>
        <Title />
        <Button />
      </Column>
      <Column>
      <Thumbnail />
      </Column>
    </Wrapper>
  )
};
