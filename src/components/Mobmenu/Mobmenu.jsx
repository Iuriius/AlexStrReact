import { StyledLink } from '../Header/Header.styled';

export const Mobmenu = ({ isOpen, setOpen }) => {
  return (
    <nav className={isOpen ? 'mobmenuActive' : 'mobmenu'}>
      <StyledLink to="/" end onClick={() => setOpen(false)}>
        Головна
      </StyledLink>
      <StyledLink to="/fishtogether" onClick={() => setOpen(false)}>
        Зареєструватися на риболовлю
      </StyledLink>
      <StyledLink to="/seminar" onClick={() => setOpen(false)}>
        Замовити семінар
      </StyledLink>
      <StyledLink to="/mountains" onClick={() => setOpen(false)}>
        Гори гайд
      </StyledLink>
      <StyledLink to="/orderbait" onClick={() => setOpen(false)}>
        Замовити наживку
      </StyledLink>
      <StyledLink to="/club" onClick={() => setOpen(false)}>
        НХНЛ клуб
      </StyledLink>
      <StyledLink to="/articles" onClick={() => setOpen(false)}>
        Статті
      </StyledLink>
      <StyledLink to="/biography" onClick={() => setOpen(false)}>
        Біографія
      </StyledLink>
    </nav>
  );
};
