import styled from '@emotion/styled';

export const SiderWrapper = styled.div`
  width: 48px;
  transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  position: relative;

  &.expand {
    width: 200px;
  }
`;
