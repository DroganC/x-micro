/*
 * @Author: Droganc
 * @Date: 2023-11-01 20:59:44
 * @LastEditTime: 2023-11-01 21:34:11
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/components/Layouts/Container/index.tsx
 */
import styled from '@emotion/styled';

const ContainerWrap = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

function Container(props) {
  return <ContainerWrap>{props.children}</ContainerWrap>;
}

export default Container;
