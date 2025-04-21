import styled from "styled-components";
import { useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
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
  left: 12px;
  top: -7px;
`;
const StyledReactCreateSelect = styled(CreatableSelect).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 16px;
  .custom-select__control {
    border: 2px solid #724D93;
    padding: 2px;
    border-radius: 20px;
    box-shadow: none;
    padding-left: 5px;
    width: 400px; 
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
    width: 400px; 
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

const opcionesDestino = [
  { value: 'montevideo', label: 'Montevideo' },
  { value: 'colonia', label: 'Colonia' },
];

const opcionesOrigen = [
  { value: 'china', label: 'China' },
  { value: 'japon', label: 'Japón' },
  { value: 'usa', label: 'Estados Unidos' },
];

const opcionesIncoterm = [
  { value: 'exw', label: 'EXW' },
  { value: 'fca', label: 'FCA' },
  { value: 'fas', label: 'FAS' },
  { value: 'fob', label: 'FOB' },
  { value: 'cfr', label: 'CFR' },
  { value: 'cif', label: 'CIF' },
  { value: 'cip', label: 'CIP' },
  { value: 'dap', label: 'DAP' },
  { value: 'dpu', label: 'DPU' },
  { value: 'dap', label: 'DAP' },
  { value: 'ddp', label: 'DDP' },
];

export default function IncoDestinyOrigin() {
  const {
    origin,
    setOrigin,
    destiny,
    setDestiny,
    incoterms,
    setIncoterm
  } = useComponentStore()
  const { ActiveTab } = useProgressStore();

  useEffect(() => {
    if (ActiveTab === 'Importación') {
      setOrigin('');
      setDestiny('Montevideo');
    } else if (ActiveTab === 'Exportación') {
      setOrigin('Montevideo');
      setDestiny('');
    }
  }, [ActiveTab, setOrigin, setDestiny]);
  return (
    <Wrapper>
      <Container>
        <ItemBox>
          <Label>Incoterm</Label>
          <StyledReactSelect
            value={incoterms ? { label: incoterms, value: incoterms } : null}
            options={opcionesIncoterm}
            placeholder="Selecciona el Incoterm"
            onChange={(e) => {
              setIncoterm(e.label);
              console.log("incoterms:", e.label); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <Label>Origen</Label>
          <StyledReactCreateSelect
            isMulti
            value={origin ? origin.map(o => ({ label: o, value: o })) : []}
            options={ActiveTab === 'Importación' ? opcionesOrigen : opcionesDestino}
            placeholder="Selecciona el Origen"
            onChange={(e) => {
              const selectedValues = e ? e.map(option => option.label) : [];
              setOrigin(selectedValues);
              console.log("origin:", selectedValues); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <Label>Destino</Label>
          <StyledReactCreateSelect
            value={destiny ? { label: destiny, value: destiny } : null}
            options={ActiveTab === 'Importación' ? opcionesDestino : opcionesOrigen}
            placeholder="Selecciona el Destino"
            onChange={(e) => {
              setDestiny(e.label);
              console.log("destiny:", e.label); // delete later
            }} />
        </ItemBox>
      </Container>
    </Wrapper>
  );
}