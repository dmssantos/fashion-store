import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: 100%;
  position: fixed;
  z-index: 1;
`;

const TitleBox = styled.div`
  width: 658px;
  height: 352px;
  margin: 162px 0 0 80px;
  font-family: var(--font1);

  h3 {
    font-size: 1.5rem;
    font-weight: var(--medium);
    color: var(--white);
    margin-bottom: 23px;
  }

  h2 {
    font-size: 4rem;
    font-weight: var(--extrabold);
    color: var(--black3);
    margin-bottom: 23px;

    span {
      font-weight: var(--regular);
    }
  }

  p {
    width: 529px;
    font-size: 0.87rem;
    font-weight: var(--medium);
    color: var(--black4);
    line-height: 28px;
  }
`;



export default function Home() {
  return (
    <Wrapper>
      <TitleBox>
        <h3>OUTFIT OF THE DAY</h3>
        <h2> <span> ALL YOUR </span> <br /> STYLES ARE HERE</h2>
        <p>Consectetur adipiscing elit. Cursus condimentum donec non dictum.
          Id et sed ac mauris, adipiscing tincidunt amet vel at. Quis lobortis id.
          consectetur adipiscing elit.
        </p>
      </TitleBox>
    </Wrapper>
  )
};
