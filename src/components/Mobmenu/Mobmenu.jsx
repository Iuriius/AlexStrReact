import { StyledLink } from '../Header/Header.styled';

export const Mobmenu = ({ isOpen, setOpen }) => {
  return (
    <nav className={isOpen ? 'mobmenu' : 'mobmenuActive'}>
      <StyledLink to="/" end onClick={setOpen}>
        Головна
      </StyledLink>
      <StyledLink to="/fishtogether" onClick={setOpen}>
        Зареєструватися на риболовлю
      </StyledLink>
      <StyledLink to="/seminar">Замовити семінар</StyledLink>
      <StyledLink to="/mountains">Гори гайд</StyledLink>
      <StyledLink to="/orderbait">Замовити наживку</StyledLink>
      <StyledLink to="/club">НХНЛ клуб</StyledLink>
      <StyledLink to="/articles">Статті</StyledLink>
      <StyledLink to="/biography">Біографія</StyledLink>
    </nav>
  );
};
