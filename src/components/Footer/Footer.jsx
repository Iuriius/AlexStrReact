import { FooterStyled } from './Footer.styled';
import { Socials } from '../Socials/Socials';

export const Footer = () => {
  return (
    <FooterStyled>
      Соціальні мережі:
      <Socials />
      Сopyright © 2023 Олексій Страшний - персональна сторінка. Всі права
      захищені.
    </FooterStyled>
  );
};
