import styled from "styled-components";
import Select from 'react-select'
import useComponentStore from '../stores/componentsStore';
import useProgressStore from '../stores/progressStore';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 120px;
`
const ItemBox = styled.div`
  display: flex;
  background-color: #FBFAFA;
  position: relative; 
`
const Label = styled.label`
  color: #724D93; 
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  padding: 0 5px;
  background-color: #FBFAFA;
  z-index: 1;
  position: absolute;
  left: 15px;
  top: -7px;
`;
const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 18px;
  border: 2px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  outline: none;
  top: 8px;
  left: -15px;
`;
const StyledReactSelect = styled(Select).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 16px;
  .custom-select__control {
    border: 2px solid #724D93;
    padding: 2px;
    border-radius: 20px;
    box-shadow: none;
    padding-left: 5px;
  width: 240px;
    background-color: #FBFAFA;
    &:hover {
      border-color: #724D93;
    }
  }
  .custom-select__single-value {
    background-color: #FBFAFA;
    color: #646464;
  }
  .custom-select__option {
    background-color: #FBFAFA;
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
      background-color: #FBFAFA;
    }
  }
  .custom-select__menu {
    background-color: #FBFAFA;
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
    color: #f0f0f0;
    background-color: #724D93;
    border-radius: 50%;
  }
  .custom-select__indicator:hover {
    color: #f0f0f0;
    background-color: #724D93;
  }
  .custom-select__indicator-separator {
    display: none;
  }
`;
const DateInput = styled.input`
  width: 197px;
  padding: 10px 19px;
  border: 2px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-family: "Inter", sans-serif; 
  text-transform: uppercase;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
  text-align: left;
`;

const opcionesFrecuencia = [
  { value: 'semanal', label: 'Semanal' },
  { value: 'quincenal', label: 'Quincenal' },
  { value: 'mensual', label: 'Mensual' },
  { value: 'ondemand', label: 'On-Demand' },
];
const opcionesServicio = [
  { value: 'directo', label: 'Directo' },
  { value: 'ts', label: 'Con T/S' },
];
const opcionesTrasbordo = [
  { value: 'china', label: 'China' },
  { value: 'paname', label: 'Panama' },
];

export default function ServiceTimeValid() {
  const {
    serviceType,
    estimatedDays,
    frequencyType,
    setFrequencyType,
    startDate,
    endDate,
    setServiceType,
    setEstimatedDays,
    setStartDate,
    setEndDate,
    transbordo,
    setTransbordo
  } = useComponentStore()

  return (
    <Wrapper>
      <Container>
        <ItemBox>
          <Label>Servicio</Label>
          <StyledReactSelect
            options={opcionesServicio}
            placeholder="Tipo servicio"
            value={serviceType ? { label: serviceType, value: serviceType } : null}
            onChange={(e) => {
              setServiceType(e.label);
              console.log("serviceType:", e.label); // delete later
            }}
          />
        </ItemBox>
        {serviceType === "Con T/S" ? 
          <ItemBox>
            <Label>Transbordo</Label>
            <StyledReactSelect
              options={opcionesTrasbordo}
              placeholder="Tipo Transbordo"
              value={transbordo ? { label: transbordo, value: transbordo } : null}
              onChange={(e) => {
                setTransbordo(e.label);
                console.log("serviceType:", e.label); // delete later
              }}
            />
          </ItemBox>
          : null
        }
        <ItemBox>
          <Label>Frecuencia</Label>
          <StyledReactSelect
            options={opcionesFrecuencia}
            placeholder="Tipo Frecuencia"
            value={frequencyType ? { label: frequencyType, value: frequencyType } : null}
            onChange={(e) => {
              setFrequencyType(e.label);
              console.log("frequencyType:", e.label); // delete later
            }}
          />
        </ItemBox>
        <ItemBox>
          <Label>Tiempo de viaje</Label>
          <Input
            placeholder="Dias estimados de viaje"
            value={estimatedDays}
            onChange={(e) => {
              setEstimatedDays(e.target.value);
              console.log("estimatedDays:", e.target.value); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <Label>Validez</Label>
          <DateInput
            type="date"
            value={startDate || null}
            onChange={(e) => {
              setStartDate(e.target.value);
              console.log("startDate:", e.target.value); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <DateInput
            type="date"
            value={endDate || null}
            min={startDate || ""}
            onChange={(e) => {
              setEndDate(e.target.value);
              console.log("endDate:", e.target.value); // delete later
            }} />
        </ItemBox>
      </Container>
    </Wrapper>
  );
}