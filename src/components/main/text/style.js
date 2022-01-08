import styled from "styled-components";

const Wrapper = styled.div`
  width: 656px;
  height: 352px;

  h1 {
    font-family: var(--roboto);
    font-weight: var(--medium);
    font-size: var(--header1);
    color: var(--whiteNormal);
    letter-spacing: 0.27em;
  }

  h2 {
    font-family: var(--montserrat);
    font-weight: 400;
    font-size: var(--header2);
    color: var(--blackTitle);

    span {
      font-weight: 800;
    }
  }

  p {
    font-family: var(--montserrat);
    font-weight: 500;
    font-size: var(--paragraph);
    color: var(--blackParagraph);
  }
`;



export {
  Wrapper
}