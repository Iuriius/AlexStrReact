import { Outlet } from 'react-router-dom';
import { SharedLayoutStyled } from './SharedLayout.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <Outlet />
      <Footer />
    </SharedLayoutStyled>
  );
};
export default SharedLayout;
