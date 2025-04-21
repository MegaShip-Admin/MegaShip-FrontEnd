import { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import useComponentStore from "../stores/componentsStore";
import useProgressStore from "../stores/progressStore";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 120px;
  margin-top: ${({ $bot }) => ($bot ? "20px" : "0")};
`;
const ItemBox = styled.div`
  display: flex;
  background-color: #fbfafa;
  position: relative;
`;
const Label = styled.label`
  color: #724d93;
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  padding: 0 5px;
  background-color: #fbfafa;
  z-index: 1;
  position: absolute;
  left: 15px;
  top: -7px;
`;
const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 18px;
  border: 2px solid #724d93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  outline: none;
  top: 8px;
  left: -15px;
`;
const StyledReactSelect = styled(Select).attrs({
  classNamePrefix: "custom-select",
})`
  font-size: 16px;
  .custom-select__control {
    border: 2px solid #724d93;
    padding: 2px;
    border-radius: 20px;
    box-shadow: none;
    padding-left: 5px;
    min-width: 240px;
    background-color: #fbfafa;
    &:hover {
      border-color: #724d93;
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
    &:hover {
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
      border-bottom: 1px solid #bebdbf;
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
      background-color: #724d93;
      border-radius: 10px;
    }
  }
  .custom-select__menu-list {
    padding: 0;
  }
  .custom-select__indicator {
    color: #f0f0f0;
    background-color: #724d93;
    border-radius: 50%;
  }
  .custom-select__indicator:hover {
    color: #f0f0f0;
    background-color: #724d93;
  }
  .custom-select__indicator-separator {
    display: none;
  }
`;
const BotonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-left: 20px;
`;
const Boton = styled.button`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: ${({ $small }) => ($small ? "fit-content" : "240px")};
  padding: 3px 11px;
  border: 2px solid #724d93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724d93;
  background-color: #fbfafa;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 30px;
  font-weight: 400;
`;

export default function TypePrice() {
  const {
    mercaderia,
    bulkType,
    setBulkType,
    bulkVolume,
    setBulkVolume,
    bulkWeight,
    setBulkWeight,
    containerType,
    setContainerType,
    containerCount,
    setContainerCount,
    containerWeight,
    setContainerWeight,
    costs,
    setCosts,
    addExtraField,
    extraServices,
    extraServicesActive,
    opcionesExtra,
    updateValue,
    setContainerList,
    danger,
    setDanger,
    isChecked,
    setIsChecked,
    containerSize,
    setContainerSize,
    setMercaderia
  } = useComponentStore();
  const { selectedType } = useProgressStore();

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
  const costsExc = [
    { id: 1, label: "Gastos en Origen", value: 0 },
    { id: 2, label: "Flete", value: 0 },
    { id: 3, label: "Gastos Locales", value: 0 },
  ];
  const costsCon = [
    { id: 1, label: "Tarifa", value: 0 },
    { id: 2, label: "Servicios admin", value: 0 },
    { id: 3, label: "Handling fee", value: 0 },
  ];

  const resetCosts = (costArray) => {
    return costArray.map(item => ({ ...item, value: 0 }));};

  const handleAddContainer = () => {
    const extractedData = costs.map((cost) => ({ label: cost.label, value: cost.value }));
    let newContainer = selectedType === "lcl" || selectedType === "ltl"
      ? { mercaderia, bulkType, bulkWeight, bulkVolume, costValues: extractedData, ...(isChecked && { danger }),}
      : { mercaderia, containerType, containerSize, containerCount, containerWeight, costValues: extractedData, ...(isChecked && { danger }), };
    
    console.log(newContainer)

    setContainerList(newContainer);
    setContainerType("");
    setContainerCount("");
    setContainerWeight("");
    setBulkType("");
    setBulkVolume("");
    setBulkWeight("");
    setDanger(false);
    setIsChecked(false);
    setContainerSize("");
    setMercaderia("");
    setCosts(
      selectedType === "lcl" || selectedType === "ltl"
        ? resetCosts(costsCon)
        : resetCosts(costsExc)
    );
  };
  useEffect(() => {
    if (selectedType === "lcl" || selectedType === "ltl") {
      setCosts(costsCon);
    } else {
      setCosts(costsExc);
    }
  }, [selectedType]);

  return (
    <Wrapper>
      <Container>
        {costs.slice(0, 3).map((cost) => (
          <ItemBox key={cost.id}>
            <Label>{cost.label}</Label>
            <Input
              placeholder="USD"
              value={cost.value}
              onChange={(e) => {
                handleFieldChange(cost.id, e.target.value);
              }}
            />
          </ItemBox>
        ))}
        <ItemBox>
          <Boton onClick={extraServicesActive}>
            {" "}
            Servicios extras <Span>{extraServices ? "-" : "+"}</Span>
          </Boton>
        </ItemBox>
        <ItemBox>
          <Boton onClick={handleAddContainer}>
            {" "}
            {selectedType === "lcl" || selectedType === "ltl"
              ? "Añadir Bulto"
              : "Añadir Contenedor"}{" "}
            <Span>+</Span>
          </Boton>
        </ItemBox>
      </Container>
      {extraServices && (
        <Container $bot>
          <StyledReactSelect
            options={opcionesExtra}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder="Seleccione una opción"
          />
          <BotonContainer>
            <Boton $small onClick={handleAddField}>
              {" "}
              Agregar
            </Boton>
          </BotonContainer>
          {costs.slice(3).map((cost) => (
            <ItemBox key={cost.id}>
              <Label>{cost.label}</Label>
              <Input
                placeholder="USD"
                value={cost.value}
                onChange={(e) => {
                  console.log(`Input changed - Value: ${e.target.value}`);
                  handleFieldChange(cost.id, e.target.value);
                }}
              />
            </ItemBox>
          ))}
        </Container>
      )}
    </Wrapper>
  );
}
