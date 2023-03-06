import { StyledLink } from '../Header/Header.styled';

export const Mobmenu = ({ isOpen, setOpen }) => {
  return (
    <nav className={isOpen ? 'mobmenuActive' : 'mobmenu'}>
      <StyledLink to="/" end>
        Головна
      </StyledLink>
      <StyledLink onClick={setOpen} to="/fishtogether">
        Зареєструватися на риболовлю
      </StyledLink>
      <StyledLink onClick={setOpen} to="/seminar">
        Замовити семінар
      </StyledLink>
      <StyledLink onClick={setOpen} to="/mountains">
        Гори гайд
      </StyledLink>
      <StyledLink onClick={setOpen} to="/orderbait">
        Замовити наживку
      </StyledLink>
      <StyledLink onClick={setOpen} to="/club">
        НХНЛ клуб
      </StyledLink>
      <StyledLink onClick={setOpen} to="/articles">
        Статті
      </StyledLink>
      <StyledLink onClick={setOpen} to="/biography">
        Біографія
      </StyledLink>
    </nav>
  );
};
