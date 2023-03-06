import { StyledLink } from '../Header/Header.styled';

export function isClosed() {
  return 'mobmenu';
}
export function isActive() {
  return 'mobmenuActive';
}

export const Mobmenu = () => {
  return (
    <nav className={isClosed()}>
      <StyledLink to="/" end>
        Головна
      </StyledLink>
      <StyledLink to="/fishtogether" onClick={isClosed()}>
        Зареєструватися на риболовлю
      </StyledLink>
      <StyledLink to="/seminar" onClick={isClosed()}>
        Замовити семінар
      </StyledLink>
      <StyledLink to="/mountains" onClick={isClosed()}>
        Гори гайд
      </StyledLink>
      <StyledLink to="/orderbait" onClick={isClosed()}>
        Замовити наживку
      </StyledLink>
      <StyledLink to="/club" onClick={isClosed()}>
        НХНЛ клуб
      </StyledLink>
      <StyledLink to="/articles" onClick={isClosed()}>
        Статті
      </StyledLink>
      <StyledLink to="/biography" onClick={isClosed()}>
        Біографія
      </StyledLink>
    </nav>
  );
};
