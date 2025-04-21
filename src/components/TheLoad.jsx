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
const CheckboxWrapper = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CheckboxLabel = styled.label`
  font-size: 16px;
  color: #724D93;
  font-weight: bold;
`;
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  appearance: none;
  border: 1.8px solid #BEBDBF;
  background-color: #FBFAFA;
  cursor: pointer;
  &:checked {
    background-color: #646464;
  }
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

const opcionesTipo = [
  { value: 'generalpurpose', label: 'General Purpose' },
  { value: 'reefer', label: 'Reefer' },
  { value: 'flatrack', label: 'Flat Rack' },
  { value: 'opentop', label: 'Open Top' },
  { value: 'tank', label: 'Tank' },
  { value: 'highcube', label: 'High Cube' },
  { value: 'nor', label: 'NOR' },
];
const opcionesBulto = [
  { value: 'palet', label: 'Palet' },
  { value: 'caja', label: 'Caja' },
  { value: 'rollo', label: 'Rollo' },
];
const opcionesTamaño = [
  { value: '20', label: '20 Pies' },
  { value: '40', label: '40 Pies' },
];

export default function TheLoad() {
  const {
    isChecked,
    setIsChecked,
    mercaderia,
    setMercaderia,
    containerWeight,
    setContainerWeight,
    bulkVolume,
    setBulkVolume,
    bulkWeight,
    setBulkWeight,
    bulkType,
    setBulkType,
    containerCount,
    setContainerCount,
    containerType,
    setContainerType,
    setDanger,
    containerSize,
    setContainerSize,
  } = useComponentStore()
  const {
    selectedType,
  } = useProgressStore();

  return (
    <Wrapper>
      <Container>
        <ItemBox>
          <Label>Mercaderia</Label>
          <Input
            placeholder="Objeto"
            value={mercaderia}
            onChange={(e) => {
              setMercaderia(e.target.value);
              console.log("company:", e.target.value); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <CheckboxWrapper>
            <Checkbox
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
                setDanger(!isChecked); 
                }}/>
            <CheckboxLabel> Peligroso</CheckboxLabel>
          </CheckboxWrapper>
        </ItemBox>
        {selectedType === "lcl" || selectedType === "ltl" ? (
          <ItemBox>
            <Label>Tipo </Label>
            <StyledReactSelect
              value={bulkType ? { label: bulkType, value: bulkType } : null}
              options={opcionesBulto}
              placeholder={"Tipo de Bulto"}
              onChange={(e) => {
                setBulkType(e.label);
                console.log("containerType:", e.label); // delete later
              }} />
          </ItemBox>
        ) : (
          <>
            <ItemBox>
              <Label>Tipo </Label>
              <StyledReactSelect
                value={containerType ? { label: containerType, value: containerType } : null}
                options={opcionesTipo}
                placeholder={"Tipo de Contenedor"}
                onChange={(e) => {
                  setContainerType(e.label);
                  console.log("containerType:", e.label); // delete later
                }} />
            </ItemBox>
            <ItemBox>
              <Label>Tamaño </Label>
              <StyledReactSelect
                value={containerSize ? { label: containerSize, value: containerSize } : null}
                options={opcionesTamaño}
                placeholder={"Tamaño del Contenedor"}
                onChange={(e) => {
                  setContainerSize(e.label);
                  console.log("containerSize:", e.label); // delete later
                }} />
          </ItemBox>
          </>
        )}
        {selectedType === "lcl" || selectedType === "ltl" ?
          <>
            <ItemBox>
              <Label>Peso</Label>
              <Input
                value={bulkWeight}
                onChange={(e) => {
                  setBulkWeight(e.target.value);
                  console.log("containerWeight:", e.target.value); // delete later
                }}
                placeholder="Ej: 100kg"
              />
            </ItemBox>
            <ItemBox>
              <Label>Volumen</Label>
              <Input
                value={bulkVolume}
                onChange={(e) => {
                  setBulkVolume(e.target.value);
                  console.log("bulkVolume:", e.target.value); // delete later
                }}
                placeholder="Ej: 100kg"
              />
            </ItemBox>
          </>
          :
          <>
            <ItemBox>
              <Label>Cantidad</Label>
              <Input
                value={containerCount}
                onChange={(e) => {
                  setContainerCount(e.target.value);
                  console.log("containerCount:", e.target.value); // delete later
                }}
                placeholder="Ej: 1, 2"
              />
            </ItemBox>
            <ItemBox>
              <Label>Peso</Label>
              <Input
                value={containerWeight}
                onChange={(e) => {
                  setContainerWeight(e.target.value);
                  console.log("containerWeight:", e.target.value); // delete later
                }}
                placeholder="Ej: 100kg"
              />
            </ItemBox>
          </>
        }
      </Container>
    </Wrapper>
  );
}