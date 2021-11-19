import styled from "styled-components";
import Jaket from '../../assets/images/jaket3.png';
import Arrow from '../../assets/images/arrow2.svg';

const Wrapper = styled.div`
  width: 50vw;
  height: 100vh;
  padding-top: 77px;
  
  display: flex;
  flex-direction: row;

  position: absolute;
  right: 0px;
`;

const Bloco1 = styled.div`
  width: 100%;
  height:70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  img {
    width: 508px;
    height: 508px;

    position: absolute;
    z-index: 2;
  }

  div {
    width: 507px;
    height: 290px;
    margin: 159px;
    padding-left: 250px;
    background-color: var(--rose);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;

    .arrow1 {
      width: 107px;
      height: 215px;
    }

    .arrow2 {
      width: 107px;
      height: 215px;
      margin-left: 100px;
    }
  }
`;

export default function Thumbnail() {
  return (
    <Wrapper>
      <Bloco1>
        <img src={Jaket} alt="jaket" />
        <div>
          <img className="arrow1" src={Arrow} alt="arrow" />
          <img className="arrow2" src={Arrow} alt="arrow" />
        </div>
      </Bloco1>
    </Wrapper>
  )
};
