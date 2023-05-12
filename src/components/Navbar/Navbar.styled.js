import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 10px;
`;

export const Link = styled(NavLink)`
  display: flex;
  padding: 3px 0;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;
  color: #c9c8c8;
  border-bottom: 3px solid #b5daf4;

  &:hover,
  &:focus {
    color: #000000;
  }
  &.active {
    color: #000000;
    border-bottom: 3px solid #ffffff;
  }
`;