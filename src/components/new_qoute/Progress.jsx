import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProgressStore from "../../stores/progressStore";
import useComponentStore from "../../stores/componentsStore";
import { useEffect } from "react";
import styled from "styled-components";
import Flecha from '../../assets/Flecha.svg'
import FlechaAtras from '../../assets/FlechaAtras.svg'
import Check from '../../assets/Check.svg'
import { isDate, isEmail, isNumber, isRequired, isString } from '../../utils/validations';


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
const Step = styled.button`
  color: #724D93;
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: ${(props) => (props.$isActive && props.$isCurrent ? "#fff" : props.$isActive ? "#724D93" : "#fff")};
  border: 2px solid ${(props) => (props.$isActive ? "#724D93" : "#BEBDBF")};
  position: static;
  transition: background-color 1.0s ease, border-color 1.0s ease;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
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
  cursor: pointer;
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
  const {
    ActiveTab,
    selectedTransport,
    selectedType,
    setStepValue,
    steps,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    updateSteps,
    errors,
    setErrors,
  } = useProgressStore();
  const componentStore = useComponentStore();
  const navigate = useNavigate();

  useEffect(() => {
    setStepValue(1, ActiveTab); // Update step 1
    setStepValue(2, selectedTransport); // Update step 2
    setStepValue(3, selectedType); // Update step 3
    updateSteps();
  }, [ActiveTab, selectedTransport, selectedType]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => toast.error(error));
      setErrors(errors);
    }
  }, [errors]);

  const validateStep = () => {
    let validations = {};
    let errors = {};
    console.log("Component store data:", componentStore); // delete later

    const stepObject = steps.find((s) => s.id === currentStep);
    if (!stepObject) return true;
    switch (stepObject.path) {
      case "two":
        validations.company = isRequired(componentStore.company, "Compañía") === true
          ? isString(componentStore.company, "Compañía")
          : isRequired(componentStore.company, "Compañía");
        validations.name = isRequired(componentStore.name, "Nombre") === true
          ? isString(componentStore.name, "Nombre")
          : isRequired(componentStore.name, "Nombre");
        validations.email = isRequired(componentStore.email, "Correo electrónico") === true
          ? isEmail(componentStore.email, "Correo electrónico")
          : isRequired(componentStore.email, "Correo electrónico");
        validations.phone = isRequired(componentStore.phone, "Teléfono") === true
          ? isNumber(componentStore.phone, "Teléfono")
          : isRequired(componentStore.phone, "Teléfono");
        validations.origin = isRequired(componentStore.origin, "Origen") === true
          ? isString(componentStore.origin, "Origen")
          : isRequired(componentStore.origin, "Origen");
        validations.destiny = isRequired(componentStore.destiny, "Destino") === true
          ? isString(componentStore.destiny, "Destino")
          : isRequired(componentStore.destiny, "Destino");
        validations.incoterms = isRequired(componentStore.incoterms, "Incoterms") === true
          ? isString(componentStore.incoterms, "Incoterms")
          : isRequired(componentStore.incoterms, "Incoterms");
        break;
      case "costs":
        componentStore.costs.forEach((cost) => {
          validations[`cost_${cost.id}`] = isRequired(cost.value, `${cost.id}`) === true
            ? isNumber(cost.value, `${cost.id}`)
            : isRequired(cost.value, `${cost.id}`);
        });
        break;
      case "services":
        validations.serviceType = isRequired(componentStore.serviceType, "Tipo de servicio") === true
          ? isString(componentStore.serviceType, "Tipo de servicio")
          : isRequired(componentStore.serviceType, "Tipo de servicio");
        validations.estimatedDays = isRequired(componentStore.estimatedDays, "Días estimados") === true
          ? isNumber(componentStore.estimatedDays, "Días estimados")
          : isRequired(componentStore.estimatedDays, "Días estimados");
        validations.startDate = isRequired(componentStore.startDate, "Fecha de inicio") === true
          ? isDate(componentStore.startDate, "Fecha de inicio")
          : isRequired(componentStore.startDate, "Fecha de inicio");
        validations.endDate = isRequired(componentStore.endDate, "Fecha de fin") === true
          ? isDate(componentStore.endDate, "Fecha de fin")
          : isRequired(componentStore.endDate, "Fecha de fin");
        validations.deposit = isRequired(componentStore.deposit, "Depósito") === true
          ? isString(componentStore.deposit, "Depósito")
          : isRequired(componentStore.deposit, "Depósito");
        validations.leaving = isRequired(componentStore.leaving, "Salida") === true
          ? isNumber(componentStore.leaving, "Salida deposito")
          : isRequired(componentStore.leaving, "Salida");
        break;
      case "expor":
        componentStore.exportationData.forEach((expo) => {
          validations[`expo_${expo.id}`] = isRequired(expo.value, `${expo.id}`) === true
            ? isNumber(expo.value, `${expo.id}`)
            : isRequired(expo.value, ` ${expo.id}`);
        });
    }
    Object.entries(validations).forEach(([key, value]) => {
      if (value !== true) {
        errors[key] = value;
      }
    });


    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return false;
    }

    setErrors({});
    return true;
  };


  const handleStepClick = (stepId) => {
    const step = steps.find((s) => s.id === stepId);
    if (step && step.path) {
      setCurrentStep(stepId);
      navigate(`/nueva_cotizacion/${step.path}`);
    }
  };

  const handleNextStep = () => {
    console.log("Next button clicked"); // Debugging log

    if (validateStep()) {
      console.log("Validation passed, moving to next step");
      nextStep(navigate);
    } else {
      console.log("Validation failed, staying on the same step");
    }
  };

  return (
    <>
      <StyledProgress>
        <DivProgress>
          <BarProgress>
            <ContainerButton>
              {currentStep >= 4 && (
                <Button onClick={() => prevStep(navigate)}>
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
                      onClick={() => handleStepClick(step.id)}
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
                  {step.id <= currentStep && step.value && (
                    <StepText>{step.value}</StepText>
                  )}
                </StepContainer>
              ))}
            </LineContainer>
            <ContainerButton>
              <Button onClick={handleNextStep}>
                {currentStep < steps.length ? 'Siguiente' : 'Finalizado'}
                <Arrow src={Flecha} />
              </Button>
            </ContainerButton>
          </BarProgress>
        </DivProgress>
      </StyledProgress>

    </>
  );
}