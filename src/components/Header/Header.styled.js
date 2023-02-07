import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: AliceBlue;

  @media screen and (min-width: 768px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 1rem;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
