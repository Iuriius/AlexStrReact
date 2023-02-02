import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
