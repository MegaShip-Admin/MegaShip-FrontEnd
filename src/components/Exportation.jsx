import styled from "styled-components";
import useComponentStore from "../stores/componentsStore";
import useProgressStore from "../stores/progressStore";
import ExportationData from "./new_qoute/ExportationData";
import Clarifications from "./new_qoute/Clarifications"

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

export default function Exportation() {
  const { ActiveTab, selectedTransport, selectedType } = useProgressStore();

  return (
    <Wrapper>
      {ActiveTab === "Exportación" &&
        (selectedTransport === 'Maritimo' || selectedTransport === 'Terrestre') &&
        selectedType === 'Consolidado'
        ? (
          <ContentMain>
            <Columns>
              <ExportationData />
            </Columns>
          </ContentMain>
        )
        : (
          <ContentMain>
            <Columns>
              <ExportationData />
            </Columns>
            <Columns>
              <Clarifications />
            </Columns>
          </ContentMain>
        )
      }
    </Wrapper>
  )
}

