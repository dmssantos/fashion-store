import Background from './background/index';
import Text from './text/index';
import Buttom from './buttom/index';
import Social from  './social/index';
import Thumbnail from './thumbnail/index';
import Product from './product/index';

import Content from './style';

export default function Main() {
  return (
    <>
      <Background />
      <Content>
        <Text />
        <Buttom />
        <Social />
        <Thumbnail />
        <Product />
      </Content>
    </>
  )
}