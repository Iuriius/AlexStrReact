import { FooterStyled } from './Footer.styled';
import { Socials } from '../Socials/Socials';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <FooterStyled>
      {t('Соціальні мережі')}:
      <Socials />
      Сopyright © 2023 {t('Олексій Страшний - персональна сторінка.')}
      {t('Всі права захищені.')}
    </FooterStyled>
  );
};
