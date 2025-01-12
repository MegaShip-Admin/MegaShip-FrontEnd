import styled from "styled-components";
import useProgressStore from "../stores/progressStore";
import Service from "./new_qoute/Service";
import Deposit from "./new_qoute/Deposit";
import Clarifications from "./new_qoute/Clarifications";

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

export default function Services() {
  const { ActiveTab, selectedTransport, selectedType } = useProgressStore();
  if (ActiveTab === "Importación") {
    if (
      selectedType === "Consolidado" &&
      (selectedTransport === "Maritimo" || selectedTransport === "Terrestre")
    ) {
      return (
        <Wrapper>
          <ContentMain>
            <Columns>
              <Service />
              <Deposit />
            </Columns>
            <Columns>
              <Clarifications />
            </Columns>
          </ContentMain>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ContentMain>
            <Columns>
              <Service />
            </Columns>
            <Columns>
              <Clarifications />
            </Columns>
          </ContentMain>
        </Wrapper>
      );
    }
  } else {
    return (
      <Wrapper>
        <ContentMain>
          <Columns>
            <Service />
          </Columns>
          <Columns>
            <Clarifications />
          </Columns>
        </ContentMain>
      </Wrapper>
    );
  }
}

