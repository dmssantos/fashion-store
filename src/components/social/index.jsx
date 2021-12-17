import styled from 'styled-components';

import facebookIcon from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import telegramIcon from '../../assets/images/send.svg';


const Wrapper = styled.div`
  width: 168px;
  height: 32px;

  margin-top: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Social = () => {
  return (
    <Wrapper>
      <img src={instagramIcon} alt="instagram" />
      <img src={facebookIcon} alt="facebook" />
      <img src={telegramIcon} alt="telegram" />
    </Wrapper>
  )
}

export default Social;