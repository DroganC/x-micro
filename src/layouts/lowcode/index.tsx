import { Container, Content, Header, Main } from '@/components/Layouts';
import { GlobalContext } from '@/constant/context';
import { Outlet } from 'umi';
function LowcodeLayout() {
  return (
    <GlobalContext.Provider value={null}>
      <Container>
        <Header></Header>
        <Main>
          <Content>
            <Outlet />
          </Content>
        </Main>
      </Container>
    </GlobalContext.Provider>
  );
}

export default LowcodeLayout;
