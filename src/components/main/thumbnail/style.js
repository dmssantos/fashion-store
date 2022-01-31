import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-star;
  justify-content: center;

  position: absolute;
  right: 80px;

  .thumbnail {
    width: 80%;
    position: absolute;
    left: 0px;
  }

  div {
    width: 300px;
    height: 220px;
    background: var(--SecondColor);

    align-self: flex-end;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 107px;
      height: 215px;
      margin-right: 20px;
    }
  }
`;

export {
  Wrapper
}