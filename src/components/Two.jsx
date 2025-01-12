import styled from "styled-components";
import useProgressStore from "../stores/progressStore";

import Client from "../components/new_qoute/Client"
import Traject from "../components/new_qoute/Traject"
import Load from "../components/new_qoute/Load"
import LoadCharacteristics from '../components/new_qoute/LoadCharacteristics';

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
  const { selectedTransport, selectedType } = useProgressStore();

  return (
    <Wrapper>
      {
        (selectedTransport === 'Maritimo' && selectedType === 'Consolidado' || selectedTransport === 'Terrestre' && selectedType === 'Consolidado')
          ? (
            <ContentMain>
              <Columns>
                <Client />
                <Load />
              </Columns>
              <Columns>
                <Traject />
                <LoadCharacteristics />
              </Columns>
            </ContentMain>
          )
          : (
            <ContentMain>
              <Columns>
                <Client />
              </Columns>
              <Columns>
                <Traject />
              </Columns>
            </ContentMain>
          )
      }
    </Wrapper>
  )
}

