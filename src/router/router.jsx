import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import IndexPage from '../pages/IndexPage';
import ListOfQuotes from '../pages/ListOfQuotes';
import Login from '../pages/Login';
import NewQuote from '../pages/NewQuote';
import Settings from '../pages/Settings';
import UserManagement from '../pages/UserManagement';
import Header from '../components/Header';
import useStore from '../stores/store';
import { useAuthStore } from '../stores/authStore';
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
  const { headerCollapsed, collapseHeader } = useStore();
  const { isAuthenticated } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        {/* Si el usuario no está autenticado, redirige al login */}
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <Route
            path="/*"
            element={
              <Layout>
                <Header />
                <MainContent $headerCollapsed={headerCollapsed} onClick={collapseHeader}>
                  <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/nueva_cotizacion" element={<NewQuote />} />
                    <Route path="/lista_cotizaciones" element={<ListOfQuotes />} />
                    <Route path="/gestion_usuarios" element={<UserManagement />} />
                    <Route path="/configuraciones" element={<Settings />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </MainContent>
              </Layout>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}
