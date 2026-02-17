import styled from "styled-components";
import Select from "react-select";
import useComponentStore from "../stores/componentsStore";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  gap: 120px;
  margin: 0 120px;
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
    width: 240px;
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

const opcionesDeposit = [
  { value: "demonsa", label: "DEMONSA" },
  { value: "bomport", label: "BOMPORT" },
  { value: "portalsur", label: "PORTAL SUR" },
];

export default function Deposit() {
  const { deposit, setDeposit, leaving, setLeaving } = useComponentStore();


  return (
    <Wrapper>
        <Container>
          <ItemBox>
            <Label>Deposito </Label>
            <StyledReactSelect
              value={deposit ? { label: deposit, value: deposit } : null}
              options={opcionesDeposit}
              placeholder={"Seleccione el Deposito"}
              onChange={(e) => {
                setDeposit(e.label);
                console.log("deposit:", e.label); // delete later
              }}
            />
          </ItemBox>
          <ItemBox>
            <Label>Salida de Deposito</Label>
            <Input
              placeholder="Salida"
              value={leaving}
              onChange={(e) => {
                setLeaving(e.target.value);
                console.log("leaving:", e.target.value); // delete later
              }}
            />
          </ItemBox>
        </Container>
    </Wrapper>
  );
}
