import styled from "styled-components";
import Cost from "./new_qoute/Cost";
import SmallRecap from "./new_qoute/SmallRecap";

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

  return (
    <Wrapper>
      <ContentMain>
        <Columns>
          <Cost />
        </Columns>
        <Columns>
          <SmallRecap />
        </Columns>
      </ContentMain>
    </Wrapper>
  )
}

