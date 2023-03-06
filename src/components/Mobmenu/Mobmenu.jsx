import { StyledLink } from '../Header/Header.styled';

export const Mobmenu = ({ isOpen, setOpen }) => {
  return (
    <nav className={isOpen ? 'mobmenuActive' : 'mobmenu'}>
      <StyledLink to="/" end onClick={setOpen}>
        Головна
      </StyledLink>
      <StyledLink to="/fishtogether" onClick={setOpen}>
        Зареєструватися на риболовлю
      </StyledLink>
      <StyledLink to="/seminar" onClick={setOpen}>
        Замовити семінар
      </StyledLink>
      <StyledLink to="/mountains" onClick={setOpen}>
        Гори гайд
      </StyledLink>
      <StyledLink to="/orderbait" onClick={setOpen}>
        Замовити наживку
      </StyledLink>
      <StyledLink to="/club" onClick={setOpen}>
        НХНЛ клуб
      </StyledLink>
      <StyledLink to="/articles" onClick={setOpen}>
        Статті
      </StyledLink>
      <StyledLink to="/biography" onClick={setOpen}>
        Біографія
      </StyledLink>
    </nav>
  );
};
