import { HeaderStyled } from './Header.styled';
import { StyledLink } from './Header.styled';
import { Link } from 'react-router-dom';
import Logo from '../../pictures/png/Logo-512x288.png';
import Flag from '../../pictures/flags/ukr.png';
import { Spin as Hamburger } from 'hamburger-react';
import { Mobmenu } from '../Mobmenu/Mobmenu';

function Open() {
  Mobmenu.style.transform = 'translate(0vw)';
}
function Close() {
  Mobmenu.style.transform = 'translate(100vw)';
}

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <img src={Logo} alt="logo" width="128px" />
        </Link>
        <nav className="navigation">
          <StyledLink to="/" end>
            Головна
          </StyledLink>
          <StyledLink to="/fishtogether">
            Зареєструватися на риболовлю
          </StyledLink>
          <StyledLink to="/seminar">Замовити семінар</StyledLink>
          <StyledLink to="/mountains">Гори гайд</StyledLink>
          <StyledLink to="/orderbait">Замовити наживку</StyledLink>
          <StyledLink to="/club">НХНЛ клуб</StyledLink>
          <StyledLink to="/articles">Статті</StyledLink>
          <StyledLink to="/biography">Біографія</StyledLink>
        </nav>
        <img
          className="language"
          src={Flag}
          alt="logo"
          width="20px"
          title="Українська"
        />
        <div className="burger">
          <Hamburger
            label="Show menu"
            size={20}
            color="steelblue"
            onToggle={toggled => {
              if (toggled) {
                Open();
              } else {
                Close();
              }
            }}
          />
        </div>
      </HeaderStyled>
      <Mobmenu />
    </>
  );
};
