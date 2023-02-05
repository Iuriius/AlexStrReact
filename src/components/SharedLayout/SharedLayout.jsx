import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { SharedLayoutStyled } from './SharedLayout.styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <SharedLayoutStyled>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </SharedLayoutStyled>
    </>
  );
};
export default SharedLayout;

// <Footer />;
