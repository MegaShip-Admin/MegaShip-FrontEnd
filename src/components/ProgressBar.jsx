import styled from "styled-components";
import Flecha from '../assets/Flecha.svg'
import FlechaAtras from '../assets/FlechaAtras.svg'
import Check from '../assets/Check.svg'
import { useEffect } from "react";
import { create } from "zustand";
import PropTypes from "prop-types";

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
position: relative;
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
background-color: ${(props) => (props.isActive && props.isCurrent ? "#fff" : props.isActive ? "#724D93" : "#fff")};
border: 2px solid ${(props) => (props.isActive || props.defaultBorder ? "#724D93" : "#BEBDBF")};
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

&:last-child { // para el ultimo paso
align-items: flex-start;
margin-left: 10px;
}
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

const useProgressStore = create((set) => ({
  currentStep: 1,
  steps: [
    { id: 1, label: " ", value: null, borderColor: "#724D93"},
    { id: 2, label: " ", value: null, borderColor: "#724D93" },
    { id: 3, label: " ", value: null, borderColor: "#724D93" },
    { id: 4, label: " ", value: null },
    { id: 5, label: " ", value: null },
    { id: 6, label: " ", value: null },
    { id: 7, label: " ", value: null },
    { id: 8, label: " ", value: null },
    { id: 9, label: " ", value: null },
    { id: 10, label: " ", value: null },
  ],
  setStepValue: (stepId, value) => // Acualiza el valor de un estado en especifico
    set((state) => {
      const updatedSteps = state.steps.map((step) =>
        step.id === stepId ? { ...step, value } : step
      );
      return { steps: updatedSteps };
    }),
  //Avanza al paso siguiente
  nextStep: () => set((state) => ({
    currentStep: state.currentStep < 4 ? 4 : Math.min(state.currentStep + 1, state.steps.length),
  })),
  // va al paso anterior
  prevStep: () => set((state) => ({
    currentStep: state.currentStep === 4 ? 1 : Math.max(state.currentStep - 1, 1),
  })),
}));

// definicion de los tipos de props que acepta el componente progress
Progress.propTypes = {
  selectedOption: PropTypes.string,
  selectedTransport: PropTypes.string,
  selectedType: PropTypes.string,
}
export default function Progress({ selectedOption, selectedTransport, selectedType }) {
  const { steps, currentStep, nextStep, prevStep, setStepValue } = useProgressStore();
  // Actualiza los valores de los pasos
  useEffect(() => {
    setStepValue(1, selectedOption); // Paso 1
    setStepValue(2, selectedTransport); // Paso 2
    setStepValue(3, selectedType); // Paso 3
  }, [selectedOption, selectedTransport, selectedType, setStepValue]);

  
  return(
    <StyledProgress>
      <DivProgress>
        <BarProgress>
          <ContainerButton>
            {currentStep >= 4 && (
              <Button onClick={prevStep}>
                <Arrow src={FlechaAtras}/>
              Atras
              </Button>
            )}
          </ContainerButton>
          <LineContainer>
            {steps.map((step, index) => ( // MApea cada paso
              <StepContainer key={step.id}>
                <Div>
                  <Step
                    isActive={step.id <= currentStep} //Estilo activo si el paso esta completado
                    isCurrent={step.id === currentStep} // Estilo especial para el paso actual (borde)
                    defaultBorder={step.id <= 3} // los primeros 3 pasos viene con borde por defecto
                  >
                    {step.id < currentStep ? ( // Icono de check
                      <CheckIcons src={Check} alt="Check" />
                    ) : (
                      step.id
                    )}
                  </Step>
                  {index < steps.length - 1 && ( // Linea entre los pasos
                    <LineContainer>
                      <StyledHR />
                    </LineContainer>
                  )}
                </Div>
                <span>{step.label}</span>
                {step.id < currentStep && step.value && ( // nombre de cada paso
                  <StepText>{step.value}</StepText>
                )}
              </StepContainer>
            ))}
          </LineContainer>
          <ContainerButton>
            <Button onClick={nextStep}>
              {currentStep < steps.length ? 'Siguiente' : 'finalizado'}
              <Arrow src={Flecha}/>
            </Button>
          </ContainerButton>
        </BarProgress>
      </DivProgress>
    </StyledProgress>
  )
}