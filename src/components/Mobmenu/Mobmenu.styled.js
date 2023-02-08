import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  color: steelblue;
  transition: color 150ms ease-in-out;
  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    font-weight: bold;
    color: orange;
  }
`;
