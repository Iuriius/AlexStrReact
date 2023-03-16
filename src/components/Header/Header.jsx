import { HeaderStyled } from './Header.styled';
import { StyledLink } from './Header.styled';
import { Link } from 'react-router-dom';
import Logo from '../../pictures/png/Logo-512x288.png';
import usFlag from '../../pictures/flags/eng.png';
import ukFlag from '../../pictures/flags/ukr.png';
import { Spin as Hamburger } from 'hamburger-react';
import { Mobmenu } from '../Mobmenu/Mobmenu';
import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation('common');
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setOpen] = useState(false);

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
              {t('Зареєструватися на риболовлю')}
            </StyledLink>
            <StyledLink to="/seminar">{t('Замовити семінар')}</StyledLink>
            <StyledLink to="/mountains">{t('Гори гайд')}</StyledLink>
            <StyledLink to="/orderbait">{t('Замовити наживку')}</StyledLink>
            <StyledLink to="/club">{t('НХНЛ клуб')}</StyledLink>
            <StyledLink to="/articles">{t('Статті')}</StyledLink>
            <StyledLink to="/biography">{t('Біографія')}</StyledLink>
          </nav>
          {i18n.language === 'uk' ? (
            <img
              className="language"
              src={usFlag}
              alt="logo"
              width="20px"
              title="English"
              onClick={() => changeLanguage('en')}
            />
          ) : (
            <img
              className="language"
              src={ukFlag}
              alt="logo"
              width="20px"
              title="Українська"
              onClick={() => changeLanguage('uk')}
            />
          )}
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
