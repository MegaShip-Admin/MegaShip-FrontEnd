import styled from 'styled-components';
import Select from 'react-select';

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
  padding: 25px 45px 45px 45px;
  border: 1.5px solid #724D93; 
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
  top: 14px;
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
  border: 1.5px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
`;

const StyledReactSelect = styled(Select).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 16px;
  .custom-select__control {
    border: 1.5px solid #724D93;
    padding: 2px;
    border-radius: 20px;
    box-shadow: none;
    padding-left: 5px;
    min-width: 500px; 
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
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 20px 20px 0 0;
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

const opcionesDeposit = [
  { value: 'dry', label: 'Dry' },
  { value: 'highcube', label: 'High Cube' },
  { value: 'reefer', label: 'Reefer' },
];

export default function Deposit() {
  return (
    <Column>
      <Card>
        <Title>Deposito</Title>
        <Label>Deposito</Label>
        <StyledReactSelect
          options={opcionesDeposit}
          placeholder="Selecciona el Tipo de Contenedor"
        />
        <Label>Salida DEPO</Label>
        <Input placeholder="placeholder" />
      </Card>
    </Column>
  )
}
