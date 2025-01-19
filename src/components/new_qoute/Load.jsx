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

const opcionesTipo = [
  { value: 'dry', label: 'Dry' },
  { value: 'highcube', label: 'High Cube' },
  { value: 'reefer', label: 'Reefer' },
];

const opcionesTamaño = [
  { value: 'pequeño', label: 'Pequeño' },
  { value: 'grande', label: 'Grande' },
];

const BotonContainer = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 20px;
`;

export default function Load() {
  const {
    selectedType,
    selectedTransport
  } = useProgressStore();
  const {
    containerType,
    containerSize,
    containerCount,
    setContainerType,
    setContainerSize,
    setContainerCount,
    setContainerList
  } = useComponentStore();

  const handleAddContainer = () => {
    const newContainer = {
      containerType,
      containerSize,
      containerCount,
    };
    setContainerList(newContainer);
    // Reset the states after adding
    setContainerType(null);
    setContainerSize(null);
    setContainerCount('');
  };

  return (
    <Wrapper>
      {
        (selectedTransport === 'Maritimo' && selectedType === 'Consolidado' || selectedTransport === 'Terrestre' && selectedType === 'Consolidado')
          ? (
            <Column>
              <Card>
                <Title>Carga</Title>
                <Label>Tamaño del contenedor</Label>
                <StyledReactCreateSelect
                  options={opcionesTamaño}
                  value={containerSize ? { value: containerSize, label: containerSize } : null}
                  onChange={(e) => {
                    setContainerSize(e.label);
                    console.log("containerSize:", e.label); // delete later
                  }}
                  placeholder="Selecciona el Tamaño del Contenedor"
                />
                <Label>Cantidad de contenedores</Label>
                <Input
                  value={containerCount}
                  onChange={(e) => setContainerCount(e.target.value)}
                  placeholder="Ej: 1, 2"
                />
              </Card>
            </Column>
          )
          : (
            <Column>
              <Card>
                <Title>Carga</Title>
                <Label>Tipo de contenedor</Label>
                <StyledReactSelect
                  options={opcionesTipo}
                  value={containerType ? { value: containerType, label: containerType } : null}
                  onChange={(e) => {
                    setContainerType(e.label);
                    console.log("containerType:", e.label); // delete later
                  }}
                  placeholder="Selecciona el Tipo de Contenedor"
                />
                <Label>Tamaño del contenedor</Label>
                <StyledReactCreateSelect
                  options={opcionesTamaño}
                  value={containerSize ? { value: containerSize, label: containerSize } : null}
                  onChange={(e) => {
                    setContainerSize(e.label);
                    console.log("containerSize:", e.label); // delete later
                  }}
                  placeholder="Selecciona el Tamaño del Contenedor" />
                <Label>Cantidad de contenedores</Label>
                <Input
                  value={containerCount}
                  onChange={(e) => {
                    setContainerCount(e.target.value);
                    console.log("containerCount:", e.target.value); // delete later
                  }}
                  placeholder="Ej: 1, 2"
                />
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