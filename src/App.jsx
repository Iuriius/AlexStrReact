import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);
const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const FishTogether = lazy(() => import('./pages/FishTogether/FishTogether'));
const Seminar = lazy(() => import('./pages/Seminar/Seminar'));
const Mountains = lazy(() => import('./pages/Mountains/Mountains'));
const OrderBait = lazy(() => import('./pages/OrderBait/OrderBait'));
const Club = lazy(() => import('./pages/Club/Club'));
const Articles = lazy(() => import('./pages/Articles/Articles'));
const Biography = lazy(() => import('./pages/Biography/Biography'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="fishtogether" element={<FishTogether />} />
        <Route path="seminar" element={<Seminar />} />
        <Route path="mountains" element={<Mountains />} />
        <Route path="orderbait" element={<OrderBait />} />
        <Route path="club" element={<Club />} />
        <Route path="articles" element={<Articles />} />
        <Route path="biography" element={<Biography />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
