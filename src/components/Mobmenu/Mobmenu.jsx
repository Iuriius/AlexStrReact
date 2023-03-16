import { StyledLink } from '../Header/Header.styled';
import { useTranslation } from 'react-i18next';

export const Mobmenu = ({ isOpen, setOpen }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <nav className={isOpen ? 'mobmenuActive' : 'mobmenu'}>
      <StyledLink to="/" end onClick={() => setOpen(false)}>
        {t('Головна')}
      </StyledLink>
      <StyledLink to="/fishtogether" onClick={() => setOpen(false)}>
        {t('Зареєструватися на риболовлю')}
      </StyledLink>
      <StyledLink to="/seminar" onClick={() => setOpen(false)}>
        {t('Замовити семінар')}
      </StyledLink>
      <StyledLink to="/mountains" onClick={() => setOpen(false)}>
        {t('Гори гайд')}
      </StyledLink>
      <StyledLink to="/orderbait" onClick={() => setOpen(false)}>
        {t('Замовити наживку')}
      </StyledLink>
      <StyledLink to="/club" onClick={() => setOpen(false)}>
        {t('НХНЛ клуб')}
      </StyledLink>
      <StyledLink to="/articles" onClick={() => setOpen(false)}>
        {t('Статті')}
      </StyledLink>
      <StyledLink to="/biography" onClick={() => setOpen(false)}>
        {t('Біографія')}
      </StyledLink>
    </nav>
  );
};
