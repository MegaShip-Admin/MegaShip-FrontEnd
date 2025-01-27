import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Progress from '../components/new_qoute/Progress';


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentMain = styled.div`
  margin-top: 3.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

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

