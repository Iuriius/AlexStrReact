import { HeaderStyled } from './Header.styled';
import { StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <StyledLink to="/" end="true">
          Homepage
        </StyledLink>
        <StyledLink to="/fishtogether">xxx</StyledLink>
        <StyledLink to="/seminar">xxx</StyledLink>
        <StyledLink to="/mountains">xxx</StyledLink>
        <StyledLink to="/orderbait">xxx</StyledLink>
        <StyledLink to="/club">xxx</StyledLink>
        <StyledLink to="/articles">xxx</StyledLink>
        <StyledLink to="/biography">xxx</StyledLink>
      </nav>
    </HeaderStyled>
  );
};
export default Header;
