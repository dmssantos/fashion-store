import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
  border-radius: 40px 40px 0 0;
  background: var(--gradient);


  overflow: hidden;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
`;


export {
  Wrapper
}