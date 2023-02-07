import { HeaderStyled } from './Header.styled';
import { StyledLink } from './Header.styled';
import Logo from '../../pictures/png/Logo-512x288.png';

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={Logo} alt="logo" width="128px" />
      <nav className="navigation">
        <StyledLink to="/" end="true">
          Головна
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
