import styled from "styled-components";

const TitleBox = styled.div`
  width: 658px;
  height: 352px;
  margin: 82.5px 0 0 80px;

  h3 {
    font-size: 1.5rem;
    font-family: var(--roboto);
    font-weight: 500;
    color: var(--white);
    margin-bottom: 23px;
  }

  h2 {
    font-size: 4rem;
    font-family: var(--montserrat);
    font-weight: 800;
    color: var(--black3);
    margin-bottom: 23px;

    span {
      font-family: var(--montserrat);
      font-weight: 400;
    }
  }

  p {
    width: 529px;
    font-size: 0.87rem;
    font-family: var(--montserrat);
    font-weight: 500;
    color: var(--black4);
    line-height: 28px;
  }
`;



export default function Title() {
  return (
    <>
      <TitleBox>
        <h3>OUTFIT OF THE DAY</h3>
        <h2> <span> ALL YOUR </span> <br /> STYLES ARE HERE</h2>
        <p>Consectetur adipiscing elit. Cursus condimentum donec non dictum.
          Id et sed ac mauris, adipiscing tincidunt amet vel at. Quis lobortis id.
          consectetur adipiscing elit.
        </p>
      </TitleBox>
    </>
  )
};
