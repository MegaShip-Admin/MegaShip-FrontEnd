import styled from "styled-components";

import Load from "../components/new_qoute/Load"
import LoadCharacteristics from '../components/new_qoute/LoadCharacteristics';
import ListOfLoads from "./new_qoute/ListOfLoads";

const Wrapper = styled.div`
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

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 0 35px;
`;

export default function Loads() {
  return (
    <Wrapper>
      <ContentMain>
        <Columns>
          <LoadCharacteristics />
          <Load />
        </Columns>
        <Columns>
          <ListOfLoads />
        </Columns>
      </ContentMain>
    </Wrapper>
  )
}

