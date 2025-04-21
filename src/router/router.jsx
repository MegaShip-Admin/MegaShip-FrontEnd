import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/common/Header';
import IndexPage from '../pages/IndexPage';
import ListOfQuotes from '../pages/ListOfQuotes';
import Login from '../pages/Login';
import NewQuote from '../pages/NewQuote';
import Settings from '../pages/Settings';
import UserManagement from '../pages/UserManagement';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  height: 92vh;
  width: 100vw;
  background-color: #FBFAFA;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default function AppRouter() {

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/nueva_cotizacion" element={<NewQuote />} />
            <Route path="/lista_cotizaciones" element={<ListOfQuotes />} />
            <Route path="/gestion_usuarios" element={<UserManagement />} />
            <Route path="/configuraciones" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* <ToastContainer
            position="top-right"
            autoClose={3000} /> */}
        </MainContent>
      </Layout>
    </BrowserRouter>
  );
}
