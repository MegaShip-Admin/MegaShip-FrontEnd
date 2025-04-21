import { useEffect } from "react";
import styled from "styled-components";
import Select from 'react-select'
import useProgressStore from "../stores/progressStore";
import useComponentStore from "../stores/componentsStore";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 0;
`
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 120px;
`
const SmallBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledReactSelect = styled(Select).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 22px;
  .custom-select__control {
    border: 2px solid #724D93;
    padding: 7px; 
    border-radius: 20px;
    box-shadow: none;
    padding-left: 8px;
    min-width: 400px;
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
    border-radius: 35%;
  }
  .custom-select__indicator:hover {
    color: #f0f0f0;
    background-color: #724D93;
  }
  .custom-select__indicator-separator {
    display: none;
  }
`;

const opcionesMaritimo = [
  { value: 'fcl', label: 'FCL' },
  { value: 'lcl', label: 'LCL' },
  { value: 'roro', label: 'RO - RO' },
  { value: 'bb', label: 'BB' },
];
const opcionesAereo = [
  { value: 'cao', label: 'CAO' },
  { value: 'pax', label: 'PAX' },
  { value: 'courier', label: 'COURIER' },
];
const opcionesTerrestre = [
  { value: 'ftl', label: 'FTL' },
  { value: 'ltl', label: 'LTL' },
];

export default function SecondSelection() {
  const {
    setSelectedType,
    selectedType,
    selectedTransport,
  } = useProgressStore();
  const { clearContainerList} = useComponentStore();

  useEffect(() => {
    clearContainerList()
  }, [selectedType, selectedTransport])

  return (
    <Wrapper>
      <BoxContainer>
        <SmallBoxContainer>
          {
            selectedTransport === "Maritimo" ?
            <StyledReactSelect
            value={opcionesMaritimo.find(option => option.value === selectedType)}
            options={opcionesMaritimo}
            placeholder={"Tipo de Transporte"}
            onChange={(selectedOption) => setSelectedType(selectedOption.value)}
          />
          : null
          }
        </SmallBoxContainer>
        <SmallBoxContainer>
          {
            selectedTransport === "Aereo" ?
            <StyledReactSelect
            value={opcionesAereo.find(option => option.value === selectedType)}
            options={opcionesAereo}
            placeholder={"Tipo de Transporte"}
            onChange={(selectedOption) => setSelectedType(selectedOption.value)}
          />
          : null
          }
        </SmallBoxContainer>
        <SmallBoxContainer>
          {
            selectedTransport === "Terrestre" ?
            <StyledReactSelect
            value={opcionesTerrestre.find(option => option.value === selectedType)}
            options={opcionesTerrestre}
            placeholder={"Tipo de Transporte"}
            onChange={(selectedOption) => setSelectedType(selectedOption.value)}
          />
          : null
          }
        </SmallBoxContainer>
      </BoxContainer>
    </Wrapper >
  );
}