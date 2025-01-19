import styled from 'styled-components';
import { useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import useComponentStore from '../../stores/componentsStore';
import useProgressStore from '../../stores/progressStore';

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
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
  z-index: 3;
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

const opcionesOrigen = [
  { value: 'montevideo', label: 'Montevideo' },
  { value: 'colonia', label: 'Colonia' },
];

const opcionesDestino = [
  { value: 'china', label: 'China' },
  { value: 'japon', label: 'Japón' },
  { value: 'usa', label: 'Estados Unidos' },
];

const opcionesIncoterm = [
  { value: 'fca', label: 'FCA' },
  { value: 'cpt', label: 'CPT' },
  { value: 'dap', label: 'DAP' },
  { value: 'dpu', label: 'DPU' },
];

export default function Traject() {
  const {
    origin,
    setOrigin,
    destiny,
    setDestiny,
    incoterms,
    setIncoterm,
  } = useComponentStore();
  const { ActiveTab } = useProgressStore();

  useEffect(() => {
    if (ActiveTab === 'Importación') {
      setOrigin('Montevideo');
      setDestiny('');
    } else if (ActiveTab === 'Exportación') {
      setOrigin('');
      setDestiny('Montevideo');
    }
  }, [ActiveTab, setOrigin, setDestiny]);

  return (
    <Column>
      <Card>
        <Title>Trayecto</Title>
        <Label>Origen</Label>
        <StyledReactSelect
          value={origin ? { label: origin, value: origin } : null}
          options={opcionesOrigen}
          placeholder="Selecciona el Origen"
          onChange={(e) => {
            setOrigin(e.label);
            console.log("origin:", e.label); // delete later
          }} />
        <Label>Destino</Label>
        <StyledReactSelect
          value={destiny ? { label: destiny, value: destiny } : null}
          options={opcionesDestino}
          placeholder="Selecciona el Destino"
          onChange={(e) => {
            setDestiny(e.label);
            console.log("destiny:", e.label); // delete later
          }} />
        <Label>IncoTerms</Label>
        <StyledReactSelect
          value={incoterms ? { label: incoterms, value: incoterms } : null}
          options={opcionesIncoterm}
          placeholder="Selecciona el Incoterm"
          onChange={(e) => {
            setIncoterm(e.label);
            console.log("incoterms:", e.label); // delete later
          }} />
      </Card>
    </Column>
  );
}