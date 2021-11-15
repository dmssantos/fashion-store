import styled from "styled-components";
import lines from '../../assets/images/lines.png';

const Back = styled.div`
  width: 100vw;
  height: 90vh;
  border-radius: 40px 40px 0 0;
  background: var(--gradient);

  display: flex;align-items: center;
  justify-content: center;
`;

const Line = styled.img`
  width: 50%;

  transform: rotate(-3.25deg);
`;

export default function Background() {
  return(
    <Back>
      <Line src={lines} alt="Lines" />
    </Back>
  )
};
