import { SocialsStyled } from './Socials.styled';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaHeading,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Socials = () => {
  return (
    <SocialsStyled>
      <Link
        title="YouTube"
        className="decoratedLink"
        to="https://www.youtube.com/@strashnaya_ribalka/featured"
      >
        <FaYoutube />
      </Link>

      <Link
        title="Facebook"
        className="decoratedLink"
        to="https://www.facebook.com/Alex.Strashnyi/"
      >
        <FaFacebookF />
      </Link>

      <Link
        title="Instagram"
        className="decoratedLink"
        to="https://www.instagram.com/strashnyifishing/"
      >
        <FaInstagram />
      </Link>

      <Link
        title="TikTok"
        className="decoratedLink"
        to="https://www.tiktok.com/@strashnyifishing"
      >
        <FaTiktok />
      </Link>

      <Link title="клуб НХНЛ" className="decoratedLink" to="https://нхнч.com/">
        <FaHeading />
      </Link>
    </SocialsStyled>
  );
};
