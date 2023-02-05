import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { SharedLayoutStyled } from './SharedLayout.styled';
import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <SharedLayoutStyled>
        <Header />
      </SharedLayoutStyled>
      <Outlet />
    </>
  );
};
export default SharedLayout;

// <Footer />;
