/*
 * @Author: Droganc
 * @Date: 2023-11-01 21:25:37
 * @LastEditTime: 2023-11-01 21:33:56
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/components/Layouts/Content/index.tsx
 */
import styled from '@emotion/styled';

const ContentWrap = styled.div`
  flex: 1;
  min-width: 650px;
  overflow: hidden;
`;

function Content(props) {
  return <ContentWrap>Content{props.children}</ContentWrap>;
}

export default Content;
