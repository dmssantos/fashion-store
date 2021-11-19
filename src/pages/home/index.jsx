import styled from 'styled-components';
import Title from '../../components/title/index';
import Button from '../../components/button/index';

const Wrapper = styled.div`
  width: fit-content;
  height: 100%;
  position: fixed;
  z-index: 1;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title />
      <Button />
    </Wrapper>
  )
};
