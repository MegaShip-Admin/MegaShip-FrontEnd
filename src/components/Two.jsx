import styled from "styled-components";
import Client from "../components/new_qoute/Client"
import Traject from "../components/new_qoute/Traject"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 0 35px;
`;

export default function Two() {
  return (
    <Wrapper>
      <ContentMain>
        <Columns>
          <Client />
        </Columns>
        <Columns>
          <Traject />
        </Columns>
      </ContentMain>
    </Wrapper>
  )
}

