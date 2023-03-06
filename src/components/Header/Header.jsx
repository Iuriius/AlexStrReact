import { HeaderStyled } from './Header.styled';
import { StyledLink } from './Header.styled';
import { Link } from 'react-router-dom';
import Logo from '../../pictures/png/Logo-512x288.png';
import Flag from '../../pictures/flags/eng.png';
import { Spin as Hamburger } from 'hamburger-react';
import { Mobmenu } from '../Mobmenu/Mobmenu';
import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <Suspense fallback="loading">
        <HeaderStyled>
          <Link to="/">
            <img src={Logo} alt="logo" width="128px" />
          </Link>
          <nav className="navigation">
            <StyledLink to="/" end>
              {t('Головна')}
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
            title="English"
            onClick={() => changeLanguage('en')}
          />
          <div className="burger">
            <Hamburger
              label="Show menu"
              size={20}
              color="steelblue"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </HeaderStyled>
        <Mobmenu isOpen={isOpen} setOpen={setOpen} />
      </Suspense>
    </>
  );
};
