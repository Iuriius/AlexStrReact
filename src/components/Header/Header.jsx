import { HeaderStyled } from './Header.styled';
import { StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <StyledLink to="/" end="true">
          Homepage
        </StyledLink>
        <StyledLink to="/fishtogether">Зареєструватися на риболовлю</StyledLink>
        <StyledLink to="/seminar">Замовити семінар</StyledLink>
        <StyledLink to="/mountains">Гори гайд</StyledLink>
        <StyledLink to="/orderbait">Замовити наживку</StyledLink>
        <StyledLink to="/club">НХНЛ клуб</StyledLink>
        <StyledLink to="/articles">Статті</StyledLink>
        <StyledLink to="/biography">Біографія</StyledLink>
      </nav>
    </HeaderStyled>
  );
};
