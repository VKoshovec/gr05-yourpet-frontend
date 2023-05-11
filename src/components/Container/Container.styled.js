import styled from 'styled-components';

export const Cont = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.color.background};
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mob}) {
    width: ${({ theme }) => theme.breakpoint.mob};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tab}) {
    width: ${({ theme }) => theme.breakpoint.tab};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desk}) {
    width: ${({ theme }) => theme.breakpoint.desk};
  }
`;