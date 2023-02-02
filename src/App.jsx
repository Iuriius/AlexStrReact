import { Routes, Route, NavLink } from 'react-router-dom';
// import { lazy } from 'react';
import { StyledLink } from './App.styled';

import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import { Homepage } from './pages/Homepage/Homepage';
import { FishTogether } from './pages/FishTogether/FishTogether';
import { Seminar } from './pages/Seminar/Seminar';
import { Mountains } from './pages/Mountains/Mountains';
import { OrderBait } from './pages/OrderBait/OrderBait';
import { Club } from './pages/Club/Club';
import { Articles } from './pages/Articles/Articles';
import { Biography } from './pages/Biography/Biography';
import { NotFound } from './components/NotFound/NotFound';

export const App = () => {
  return (
    <Container>
      <Header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fishtogether" element={<FishTogether />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/mountains" element={<Mountains />} />
          <Route path="/orderbait" element={<OrderBait />} />
          <Route path="/club" element={<Club />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
      <Main />
      <Footer />
    </Container>
  );
};
