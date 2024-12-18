import styled from "styled-components";
import Progress from '../components/Progress';
import { Outlet } from "react-router-dom";

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
import FirstSteps from '../components/FirstSteps';
import Try from '../components/Try';


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

// const Columns = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 70px;
//   padding: 0 35px;
// `;

const ProgressBarWrapper = styled.div`
  height: 10%;
  width: 100%;
  margin-bottom: 3.5%;
`;

export default function NewquoteMain() {
  return (
    <Wrapper>
      <ContentMain>
        <Outlet />
      </ContentMain>
      <ProgressBarWrapper>
        <Progress />
      </ProgressBarWrapper>
    </Wrapper>
  )
}

