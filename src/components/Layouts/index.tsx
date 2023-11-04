import styled from '@emotion/styled';

/*
 * @Author: Droganc
 * @Date: 2023-11-01 20:50:34
 * @LastEditTime: 2023-11-01 21:43:46
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/components/Layouts/index.tsx
 */
export { default as Container } from './Container';
export { default as Content } from './Content';
export { default as Header } from './Header';
export { default as Sider } from './Sider';

export const Main = styled.div`
  display: flex;
  flex: 1;
  flex-basis: auto;
  flex-direction: row;
  overflow: hidden;
  background-color: transparent;
`;
