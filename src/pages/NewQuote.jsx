import styled from "styled-components";
import FirstSteps from '../components/FirstSteps';
import SecondSelection from '../components/SecondSelection';
import ThirdCustomer from "../components/ThirdCustomer";
import IncoDestinyOrigin from "../components/IncoDestinyOrigin";
import TheLoad from "../components/TheLoad";
import TypePrice from "../components/TypePrice";
import DisplayContainer from "../components/DisplayContainer";
import ServiceTimeValid from "../components/ServiceTimeValid";
import Disclaimers from "../components/Disclaimers";
import Deposit from "../components/Deposit";
import useProgressStore from "../stores/progressStore";

const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
`;

const ContentMain = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  >*{
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
  }
`;


export default function NewquoteMain() {  
  const { selectedType } = useProgressStore();

  return (
    <Wrapper>
      <ContentMain>
        <FirstSteps />
        <SecondSelection />
        <ThirdCustomer />
        <IncoDestinyOrigin />
        <TheLoad />
        {(selectedType === "lcl" || selectedType === "ltl") && <Deposit />}
        <TypePrice />
        <DisplayContainer />
        <ServiceTimeValid />
        <Disclaimers />
      </ContentMain>
    </Wrapper>
  )
}

