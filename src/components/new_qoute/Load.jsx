import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select'
import useProgressStore from '../../stores/progressStore';
import useComponentStore from '../../stores/componentsStore';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  ${({ disabled }) => disabled && `color: #646464;`}
`;

const Input = styled.input`
  max-width: 480px;
  padding: 11px 0 11px 18px;
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
  ${({ disabled }) => disabled && `border: 1.8px solid #646464; cursor: not-allowed;`}
`;

const StyledReactCreateSelect = styled(CreatableSelect).attrs({
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

const StyledReactSelect = styled(Select).attrs({
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

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 5px;
  width: 160px;
  padding: 3px 0;
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

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
`;
const CheckboxWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const CheckboxLabel = styled.label`
margin-top: 18px;
font-size: 16px;
color: #724D93;
font-weight: bold;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
width: 20px;
height: 20px;
margin-top: 20px;
border-radius: 50%;
appearance: none;
border: 1.8px solid #BEBDBF;
background-color: #fbfafa;
cursor: pointer;
&:checked {
  background-color: #646464;
}
`;

const InputLabelWrapper = styled.div`
display: flex;
flex-direction: column;
width: 400px;
`;


export default function Load() {
  const {
    selectedType,
    selectedTransport
  } = useProgressStore();
  const {
    containerType,
    containerCount,
    bulkType,
    bulkVolume,
    bulkWeight,
    setContainerType,
    setContainerCount,
    setBulkType,
    setBulkVolume,
    setBulkWeight,
    setContainerList,
    isChecked,
    setIsChecked,
    danger,
    setDanger
  } = useComponentStore();

  const handleAddContainer = () => {
    const newContainer = {
      containerType,
      containerCount,
      bulkType,
      bulkVolume,
      bulkWeight,
      danger,
    };
    setContainerList(newContainer);
    console.log(newContainer)
    // Reset the states after adding
    setContainerType('');
    setContainerCount('');
    setBulkType('');
    setBulkVolume('');
    setBulkWeight('');
    setDanger('');
  };

  return (
    <Wrapper>
      {
        (selectedTransport === 'Maritimo' && selectedType === 'Consolidado' || selectedTransport === 'Terrestre' && selectedType === 'Consolidado')
          ? (
            <Column>
              <Card>
                <Title>Carga</Title>
                <Label>Tipo de contenedor</Label>
                <StyledReactCreateSelect
                  options={opcionesTipo}
                  value={containerType ? { value: containerType, label: containerType } : null}
                  onChange={(e) => {
                    setContainerType(e.label);
                    console.log("containerType:", e.label); // delete later
                  }}
                  placeholder="Selecciona el Tamaño del Contenedor"
                />
                <Label>Cantidad de contenedores</Label>
                <Input
                  value={containerCount}
                  onChange={(e) => setContainerCount(e.target.value)}
                  placeholder="Ej: 1, 2"
                />
                <Container>
                  <CheckboxWrapper>
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <CheckboxLabel> Peligroso</CheckboxLabel>
                  </CheckboxWrapper>
                  <InputLabelWrapper>
                    <Label disabled={!isChecked}>UN</Label>
                    <Input
                      placeholder="1000"
                      disabled={!isChecked}
                      value={danger}
                      onChange={(e) => {
                        setDanger(e.target.value);
                        console.log("danger:", e.target.value); // delete later
                      }} />
                  </InputLabelWrapper>
                </Container>
                <BotonContainer>
                  <Boton onClick={handleAddContainer}> Añadir <Span>+</Span></Boton>
                </BotonContainer>
              </Card>
            </Column>
          )
          : (
            <Column>
              <Card>
                <Title>Carga</Title>
                {/*cantidad de piezas, peso bruto, cbm*/}
                <Label>Tipo de Bulto</Label>
                <StyledReactSelect
                  options={opcionesBulto}
                  value={bulkType ? { value: bulkType, label: bulkType } : null}
                  onChange={(e) => {
                    setBulkType(e.label);
                    console.log("bulkType:", e.label); // delete later
                  }}
                  placeholder="Selecciona el Tipo de Contenedor"
                />
                <Label>Peso</Label>
                <Input
                  value={bulkWeight}
                  onChange={(e) => {
                    setBulkWeight(e.target.value);
                    console.log("bulkWeight:", e.target.value); // delete later
                  }}
                  placeholder="Ej: 100kg"
                />
                <Label>Volumen</Label>
                <Input
                  value={bulkVolume}
                  onChange={(e) => {
                    setBulkVolume(e.target.value);
                    console.log("bulkVolume:", e.target.value); // delete later
                  }}
                  placeholder="Ej: 3CBM"
                />
                <Container>
                  <CheckboxWrapper>
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <CheckboxLabel> Peligroso</CheckboxLabel>
                  </CheckboxWrapper>
                  <InputLabelWrapper>
                    <Label disabled={!isChecked}>UN</Label>
                    <Input
                      placeholder="1000"
                      disabled={!isChecked}
                      value={danger}
                      onChange={(e) => {
                        setDanger(e.target.value);
                        console.log("danger:", e.target.value); // delete later
                      }} />
                  </InputLabelWrapper>
                </Container>
                <BotonContainer>
                  <Boton onClick={handleAddContainer}> Añadir <Span>+</Span></Boton>
                </BotonContainer>
              </Card>
            </Column>
          )
      }
    </Wrapper>
  )
}

