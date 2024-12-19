import { useNavigate } from 'react-router-dom';
import useProgressStore from "../stores/progressStore";
import { useEffect } from "react";
import styled from "styled-components";
import Flecha from '../assets/Flecha.svg'
import FlechaAtras from '../assets/FlechaAtras.svg'
import Check from '../assets/Check.svg'

const StyledProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
`
const DivProgress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  width: 65vw;
`
const BarProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
`
const Step = styled.span`
  color: #724D93;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: ${(props) => (props.$isActive && props.$isCurrent ? "#fff" : props.$isActive ? "#724D93" : "#fff")};
  border: 2px solid ${(props) => (props.$isActive || props.$defaultBorder ? "#724D93" : "#BEBDBF")};
  position: static;
  transition: background-color 1.0s ease, border-color 1.0s ease;
  &:last-of-type {
  margin-right: 10px;
}
`
const CheckIcons = styled.img`
  height: 16px;
  width: 16px;
`
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  height: 40px;
  width: 115px;
  border: 2px solid #724D93;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  font-size: 14px;
  font-weight: bold;
  color: #724D93;
  margin-right: 40px;
  margin-left: 40px;
`
const Arrow = styled.img`
  height: 16px;
  width: 16px;
`
const StyledHR = styled.hr`
  border: none;
  border-top: 2px solid #ccc;
  margin: 20px 0;
  width: 20px;
`
const LineContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
margin-left: 10px;
`
const StepContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100px;
`
const StepText = styled.p`
  margin-top: 8px;
  font-size: 15px;
  font-weight: bold;
  color: #724D93; 
  text-align: center;
  position: absolute;
  top: 50px;
  left: -6px;
  right: 24px;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`

export default function Progress() {
  const { ActiveTab, selectedTransport, selectedType, setStepValue,
    steps, currentStep, nextStep, prevStep,
  } = useProgressStore();
  const navigate = useNavigate();

  useEffect(() => {
    setStepValue(1, ActiveTab); // Update step 1
    setStepValue(2, selectedTransport); // Update step 2
    setStepValue(3, selectedType); // Update step 3
  }, [ActiveTab, selectedTransport, selectedType]);

  useEffect(() => {
    console.log("Steps:", steps);
    steps.forEach(step => {
      console.log(`Step ID: ${step.id}, Label: ${step.label}`);
    });
  }, [steps]);

  return (
    <StyledProgress>
      <DivProgress>
        <BarProgress>
          <ContainerButton>
            {currentStep >= 4 && (
              <Button onClick={prevStep}>
                <Arrow src={FlechaAtras} />
                Atras
              </Button>
            )}
          </ContainerButton>
          <LineContainer>
            {steps.map((step, index) => (
              <StepContainer key={step.id}>
                <Div>
                  <Step
                    $isActive={step.id <= currentStep}
                    $isCurrent={step.id === currentStep}
                    $defaultBorder={step.id <= 3}
                  >
                    {step.id < currentStep ? (
                      <CheckIcons src={Check} alt="Check" />
                    ) : (
                      step.id
                    )}
                  </Step>
                  {index < steps.length - 1 && (
                    <LineContainer>
                      <StyledHR />
                    </LineContainer>
                  )}
                </Div>
                {step.id < currentStep && step.value && (
                  <StepText>{step.value}</StepText>
                )}
              </StepContainer>
            ))}
          </LineContainer>
          <ContainerButton>
            <Button onClick={nextStep}>
              {currentStep < steps.length ? 'Siguiente' : 'finalizado'}
              <Arrow src={Flecha} />
            </Button>
          </ContainerButton>
        </BarProgress>
      </DivProgress>
    </StyledProgress>
  );
}