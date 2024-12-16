
import { useState } from "react";
import styled from "styled-components";

// Crear una lista de pasos (10 pasos)
const steps = Array.from({ length: 10 }, (_, index) => index + 1);

function App() {
  // Mantener el paso actual en el estado
  const [currentStep, setCurrentStep] = useState(1);

  // Función para avanzar al siguiente paso
  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  // Función para retroceder al paso anterior
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <StyledProgress>
      {/* Barra de progreso */}
      <DivProgress>
        <Steps>
          {steps.map((step) => (
            <Step key={step} isActive={step <= currentStep}>
              {step}
            </Step>
          ))}
        </Steps>
      </DivProgress>

      {/* Botones */}
      <ButtonsContainer>
        <Button onClick={prevStep} disabled={currentStep === 1}>
          Anterior
        </Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length}>
          Siguiente
        </Button>
      </ButtonsContainer>
    </StyledProgress>
  );
}

export default App;
// Estilos con Styled Components

const StyledProgress = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 15vh;
width: 83vw;
`
const DivProgress =  styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: red;
height: 100%;
width: 70%;
`

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 20px 0;
`;

const Step = styled.span`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isActive ? "#4caf50" : "#f3f3f3")};
  border: 2px solid ${(props) => (props.isActive ? "#4caf50" : "#ccc")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isActive ? "white" : "#999")};
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const ButtonsContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #45a049;
  }
`;
