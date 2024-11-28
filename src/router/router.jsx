import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import IndexPage from '../pages/IndexPage';
import ListOfQuotes from '../pages/ListOfQuotes';
import Login from '../pages/Login';
import NewQuote from '../pages/NewQuote';
import Settings from '../pages/Settings';
import UserManagement from '../pages/UserManagement';
import Header from '../components/Header';
import useStore from '../stores/store';

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
  const { headerCollapsed, expandHeader, collapseHeader } = useStore();
  const handleMainContentClick = () => {
    if (!headerCollapsed) {
      collapseHeader();
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header collapsed={headerCollapsed} onClick={expandHeader} />
        <MainContent headerCollapsed={headerCollapsed} onClick={handleMainContentClick}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/nueva_cotizacion" element={<NewQuote />} />
            <Route path="/lista_cotizaciones" element={<ListOfQuotes />} />
            <Route path="/gestion_usuarios" element={<UserManagement />} />
            <Route path="/configuraciones" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>
      </Layout>
    </BrowserRouter>
  );
}
