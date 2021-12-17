import styled from "styled-components";

import Arrow from '../../assets/images/arrow1.svg';

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;

  button {
    width: 230px;
    height: 50px;
    background-color: var(--white);
    border-radius: 100px;
    padding: 14px 49px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.12rem;
      font-family: var(--montserrat);
      font-weight: 700;
      color: var(--light-blue);
    }
  }
`;

export default function Button() {
  return (
    <Wrapper>
      <button>
        <span>
          BUY NOW
        </span>

        <img src={Arrow} alt="arrow" />
      </button>
    </Wrapper>
  )
};
