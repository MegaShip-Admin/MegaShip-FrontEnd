import styled from "styled-components";
import useComponentStore from "../stores/componentsStore";
import ExtraServices from "./new_qoute/ExtraServices";
import Cost from "./new_qoute/Cost";

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

export default function Costs() {
  const { extraServices } = useComponentStore();

  return (
    <Wrapper>
      <ContentMain>
        <Columns>
          <Cost />
        </Columns>
        <Columns>
          <ExtraServices isActive={extraServices} />
        </Columns>
      </ContentMain>
    </Wrapper>
  )
}

