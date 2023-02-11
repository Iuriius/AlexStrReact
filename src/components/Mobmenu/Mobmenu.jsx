import { StyledLink } from '../Header/Header.styled';

export const Mobmenu = () => {
  function Close() {
    document.getElementsByClassName('hamburger-react')[0].attributes[
      'aria-expanded'
    ] = false;
  }

  return (
    <nav className="mobmenu">
      <StyledLink to="/" end onClick={Close}>
        Головна
      </StyledLink>
      <StyledLink to="/fishtogether" onClick={Close}>
        Зареєструватися на риболовлю
      </StyledLink>
      <StyledLink to="/seminar" onClick={Close}>
        Замовити семінар
      </StyledLink>
      <StyledLink to="/mountains" onClick={Close}>
        Гори гайд
      </StyledLink>
      <StyledLink to="/orderbait" onClick={Close}>
        Замовити наживку
      </StyledLink>
      <StyledLink to="/club" onClick={Close}>
        НХНЛ клуб
      </StyledLink>
      <StyledLink to="/articles" onClick={Close}>
        Статті
      </StyledLink>
      <StyledLink to="/biography" onClick={Close}>
        Біографія
      </StyledLink>
    </nav>
  );
};
