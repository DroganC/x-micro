import { Container, Content, Header, Main, Sider } from '@/components/Layouts';
import ContentTabs from '@/components/Layouts/Content.Tabs';
import { GlobalContext } from '@/constant/context';
import { observer } from 'mobx-react-lite';
function Private() {
  return (
    <GlobalContext.Provider value={null}>
      <Container>
        <Header></Header>
        <Main>
          <Sider />
          <Content>
            <ContentTabs />
          </Content>
        </Main>
      </Container>
    </GlobalContext.Provider>
  );
}

export default observer(Private);
