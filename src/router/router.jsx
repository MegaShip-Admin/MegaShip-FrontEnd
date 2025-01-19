import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import useHeaderStore from '../stores/headerStore';
import Header from '../components/common/Header';
import IndexPage from '../pages/IndexPage';
import ListOfQuotes from '../pages/ListOfQuotes';
import Login from '../pages/Login';
import NewQuote from '../pages/NewQuote';
import Settings from '../pages/Settings';
import UserManagement from '../pages/UserManagement';
import FirstSteps from '../components/new_qoute/FirstSteps';
import Two from '../components/Two';
import Loads from '../components/Loads';
import Costs from '../components/Costs';
import Services from '../components/Services';
import Exportation from '../components/Exportation';
import Recap from '../components/new_qoute/Recap';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex-grow: 1;
  background-color: #FFFFFF;
`;

export default function AppRouter() {
  const { headerCollapsed, collapseHeader } = useHeaderStore();

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <MainContent $headerCollapsed={headerCollapsed} onClick={collapseHeader}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/nueva_cotizacion" element={<NewQuote />}>
              <Route path="" element={<Navigate to="first" replace />} />
              <Route path="first" element={<FirstSteps />} />
              <Route path="two" element={<Two />} />
              <Route path="loads" element={<Loads />} />
              <Route path="costs" element={<Costs />} />
              <Route path="services" element={<Services />} />
              <Route path="expor" element={<Exportation />} />
              <Route path="resumen" element={<Recap />} />
              <Route path="*" element={<Navigate to="/nueva_cotizacion" replace />} />
            </Route>
            <Route path="/lista_cotizaciones" element={<ListOfQuotes />} />
            <Route path="/gestion_usuarios" element={<UserManagement />} />
            <Route path="/configuraciones" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContent>
      </Layout>
    </BrowserRouter>
  );
}
