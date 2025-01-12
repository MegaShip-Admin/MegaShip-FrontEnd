import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
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
  padding: 25px 45px 45px 45px;
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
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
`;

const StyledReactSelect = styled(CreatableSelect).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 16px;
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

const opcionesServicio = [
  { value: 'directo', label: 'Directo' },
  { value: 'viashangai', label: 'Via Shangai' },
];

const DateInput = styled.input`
  width: 196px;
  padding: 10px 19px;
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-family: "Inter", sans-serif; 
  text-transform: uppercase;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
  text-align: left;
`;

const DateInputContainer = styled.div`
  display: flex;
  gap: 27px;
`;

export default function Service() {
  const {
    serviceType,
    estimatedDays,
    startDate,
    endDate,
    setServiceType,
    setEstimatedDays,
    setStartDate,
    setEndDate,
  } = useComponentStore()

  return (
    <Column>
      <Card>
        <Title>Servicio</Title>
        <Label>Servicio</Label>
        <StyledReactSelect
          options={opcionesServicio}
          placeholder="Selecciona el Tipo servicio"
          value={serviceType ? { label: serviceType, value: serviceType } : null}
          onChange={(e) => {
            setServiceType(e.label);
            console.log("serviceType:", e.label); // delete later
          }}
        />
        <Label>Tiempo de viaje</Label>
        <Input
          placeholder="Dias estimados de viaje"
          value={estimatedDays}
          onChange={(e) => {
            setEstimatedDays(e.target.value);
            console.log("estimatedDays:", e.target.value); // delete later
          }} />
        <Label>Validez</Label>
        <DateInputContainer>
          <DateInput
            type="date"
            value={startDate || null}
            onChange={(e) => {
              setStartDate(e.target.value);
              console.log("startDate:", e.target.value); // delete later
            }} />
          <DateInput
            type="date"
            value={endDate || null}
            onChange={(e) => {
              setEndDate(e.target.value);
              console.log("endDate:", e.target.value); // delete later
            }} />
        </DateInputContainer>
      </Card>
    </Column>
  )
}
