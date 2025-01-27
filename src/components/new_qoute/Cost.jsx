import { useState } from "react";
import styled from 'styled-components';
import Select from 'react-select'
import useComponentStore from '../../stores/componentsStore';

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px; 
  max-width: 500px;
  padding: 25px 55px 45px 35px;
  border: 1.8px solid #724D93; 
  border-radius: 20px;
  gap: 5px;
  background-color: #fbfafa; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  position: relative;
`;

const Title = styled.label`
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  background-color: #724D93;
  color: #fbfafa; 
  font-weight: bold;
  width: fit-content;
  padding: 8px 90px;
  border-radius: 20px;
  z-index: 1;
`;

const Label = styled.label`
  position: relative;
  top: 11px;
  left: 13px;
  background-color: #fbfafa;
  color: #724D93; 
  font-weight: bold;
  width: fit-content;
  padding: 0 5px;
  z-index:3;
`;

const Input = styled.input`
  width: 480px;
  padding: 11px 0 11px 18px;
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
`;

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 5px;
  width: fit-content;
  padding: 3px 25px;
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724D93;
  background-color: #fbfafa;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 30px;
  font-weight: 400;
`;

const BotonContainer = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledReactSelect = styled(Select).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 16px;
  margin-top: 15px;
  .custom-select__control {
    border: 1.8px solid #724D93;
    padding: 2px;
    border-radius: 20px;
    box-shadow: none;
    padding-left: 5px;
    min-width: 500px; 
    background-color: #fbfafa;
    &:hover {
      border-color: #724D93;
    }
  }
  .custom-select__single-value {
    background-color: #fbfafa;
    color: #646464;
  }
  .custom-select__option {
    background-color: #fbfafa;
    border-radius: 20px;
    color: #646464;
    &:hover{
      background-color: #bebdbf;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 20px 20px 0 0;
      border-top: none;
    }
    &:last-child {
      border-radius: 0 0 20px 20px;
      border-bottom: none; 
    }
    &:not(:last-child) {
      border-bottom: 1px solid #BEBDBF;
    }
    &:active {
      background-color: #fbfafa;
    }
  }
  .custom-select__menu {
    background-color: #fbfafa;
    border-radius: 20px;
    z-index: 1000;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: #f0f0f0;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #724D93;
      border-radius: 10px;
    }
  }
  .custom-select__menu-list {
    padding: 0;
  }
  .custom-select__indicator {
    color: #fbfafa;
    background-color: #724D93;
    border-radius: 50%;
  }
  .custom-select__indicator:hover {
    color: #fbfafa;
    background-color: #724D93;
  }
  .custom-select__indicator-separator {
    display: none;
  }
`;

const ScrollableContent = styled.div`
  max-height: 600px;
  width: fit-content;
  padding: 10px 15px 10px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #724D93;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5c3b77;
  }
`;



export default function Cost() {
  const {
    costs,
    addExtraField,
    extraServices,
    extraServicesActive,
    opcionesExtra,
    updateValue,
  } = useComponentStore();

  const [selectedOption, setSelectedOption] = useState(null);
  const handleAddField = () => {
    if (selectedOption) {
      addExtraField(selectedOption.label);
      setSelectedOption(null);
    }
  };
  const handleFieldChange = (id, value) => {
    updateValue(id, value);
  };

  return (
    <Column>
      <Card>
        <ScrollableContent>
          <Title>Costos</Title>
          {costs.map((cost) => (
            <div key={cost.id}>
              <Label>{cost.label}</Label>
              <Input
                placeholder="USD"
                value={cost.value}
                onChange={(e) => handleFieldChange(cost.id, e.target.value)}
              />
            </div>
          ))}
          {extraServices && (
            <>
              <StyledReactSelect
                options={opcionesExtra}
                value={selectedOption}
                onChange={setSelectedOption}
                placeholder="Seleccione una opción"
              />
              <BotonContainer>
                <Boton onClick={handleAddField}> Agregar</Boton>
              </BotonContainer>
            </>
          )}
          <BotonContainer>
            <Boton onClick={extraServicesActive}> Servicios extras <Span>{extraServices ? '-' : '+'}</Span></Boton>
          </BotonContainer>
        </ScrollableContent>
      </Card>
    </Column >
  )
}
