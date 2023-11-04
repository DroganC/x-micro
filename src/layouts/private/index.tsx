import { Container, Content, Header, Main, Sider } from '@/components/Layouts';
import { GlobalContext } from '@/constant/context';
import { Outlet } from 'umi';
function Private() {
  return (
    <GlobalContext.Provider value={null}>
      <Container>
        <Header></Header>
        <Main>
          <Sider />
          <Content>
            <Outlet />
          </Content>
        </Main>
      </Container>
    </GlobalContext.Provider>
  );
}

export default Private;
