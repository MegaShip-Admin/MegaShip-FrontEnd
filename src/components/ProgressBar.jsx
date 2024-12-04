import styled from "styled-components";
import Flecha from '../assets/Flecha.svg'
import FlechaAtras from '../assets/FlechaAtras.svg'
import Check from '../assets/Check.svg'
import { create } from "zustand";

const StyledProgress = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 15vh;
`
const DivProgress =  styled.div`
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
background-color: ${(props) => (props.isActive ? "#724D93" : "#fff")};
border: 2px solid ${(props) => (props.isActive ? "#724D93" : "#BEBDBF")};
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
  margin: 0 10px
`
const StepContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
// para manejar el estado de los pasos
const UseProgress = create((set) => ({
  currentStep: 0, // estado inicial
  setCurrentStep: (step) => set({ currentStep: step}), // para actualizar el paso actual
  Next: () => set((state) => ({ currentStep: state.currentStep + 1})), // avanza al siguiente paso
  Prev: () => set((state) => ({ currentStep: state.currentStep - 1})), // retrocede al paso anteerior
}))

export default function Progress() {
  const {currentStep, Next, Prev} = UseProgress();
  const steps = [1,2,3,4,5,6,7,8,9,10];
  
  return (
    <StyledProgress>
      <DivProgress>
        <BarProgress>
          <ContainerButton>
            <Button onClick={Prev} disabled={currentStep === 0}>
              <Arrow src={FlechaAtras} alt="flechaAtras"/>
              Atras
            </Button>
          </ContainerButton>
          {/* Mapeo de los pasos para mostrar cada uno de ellos */}
          {steps.map((STEPS, index) => (
            <StepContainer key={STEPS}>
              <Step isActive={STEPS <= currentStep}>
                {/* Si el paso esta atcivo, muestra el icono */}
                {STEPS <= currentStep ? (
                  <CheckIcons src={Check} alt='Check'/>
                ) : (
                  //Si no esta solo se muestra el N°
                  STEPS
                )}
              </Step>
              {/* Linea de separacion */}
              {index < steps.length - 1 && (
                <LineContainer>
                  <StyledHR />
                </LineContainer>
              )}
            </StepContainer>
          ))}
          <ContainerButton>
            <Button onClick={Next} disabled={currentStep === steps.length - 1}>
              Siguiente
              <Arrow src={Flecha} alt="flecha"/>
            </Button>
          </ContainerButton>
        </BarProgress>
      </DivProgress>
    </StyledProgress>
  )
}