import { HeaderCenter, HeaderLeft, HeaderRight, HeaderWrapper } from './styled';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>left</HeaderLeft>
      <HeaderCenter>center</HeaderCenter>
      <HeaderRight>right</HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;
