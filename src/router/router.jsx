import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import useHeaderStore from '../stores/headerStore';
import Header from '../components/common/Header';

import IndexPage from '../pages/IndexPage';
import ListOfQuotes from '../pages/ListOfQuotes';
import Login from '../pages/Login';
import NewQuote from '../pages/NewQuote';
import Settings from '../pages/Settings';
import UserManagement from '../pages/UserManagement';

import FirstSteps from '../components/FirstSteps';
import Client from "../components/new_qoute/Client"
import Traject from "../components/new_qoute/Traject"
import Load from "../components/new_qoute/Load"
import LoadCharacteristics from '../components/new_qoute/LoadCharacteristics';
import ListOfLoads from '../components/new_qoute/ListOfLoads';
import Cost from '../components/new_qoute/Cost';
import ExtraServices from '../components/new_qoute/ExtraServices';
import Service from '../components/new_qoute/Service';
import Deposit from '../components/new_qoute/Deposit';
import Clarifications from '../components/new_qoute/Clarifications';
import ExportationData from '../components/new_qoute/ExportationData';

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
              <Route path="first" element={<FirstSteps />} />
              <Route path="client" element={<Client />} />
              <Route path="traject" element={<Traject />} />
              <Route path="load-characteristics" element={<LoadCharacteristics />} />
              <Route path="load" element={<Load />} />
              <Route path="list-of-loads" element={<ListOfLoads />} />
              <Route path="cost" element={<Cost />} />
              <Route path="extra-services" element={<ExtraServices />} />
              <Route path="service" element={<Service />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="clarifications" element={<Clarifications />} />
            </Route>
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
