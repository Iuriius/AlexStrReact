import { StyledLink } from './Mobmenu.styled';

export const Mobmenu = () => {
  return (
    <div>
      <ul>
        <nav className="MobmenuNavigation">
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
      </ul>
    </div>
  );
};
