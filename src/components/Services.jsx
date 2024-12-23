import styled from "styled-components";

import Service from "./new_qoute/Service";
import Deposit from "./new_qoute/Deposit";
import Clarifications from "./new_qoute/Clarifications";

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

export default function Services() {
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
  )
}

