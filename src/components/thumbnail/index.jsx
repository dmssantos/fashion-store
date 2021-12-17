import styled from "styled-components";
import Jaket from '../../assets/images/jaket3.png';
import Arrow from '../../assets/images/arrow2.svg';

const Wrapper = styled.div`
  width: 465px;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  right: 0;

  img {
    width: 368px;
    
    position: absolute;
    z-index: 10;

  }

  div {
    width: 368px;
    height: 180px;

    padding: 0 40px;

    background: var(--rose);

    align-self: flex-end;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 70px;
      
      position: relative;
    }
  }
`;

export default function Thumbnail() {
  return (
    <Wrapper>
      <img src={Jaket} alt="jaket" />
      <div>
        <img src={Arrow} alt="arrow" />
        <img src={Arrow} alt="arrow" />
      </div>
    </Wrapper>
  )
};
