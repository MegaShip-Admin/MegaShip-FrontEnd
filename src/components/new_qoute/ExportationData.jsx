import styled from 'styled-components';
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
  display: flex;
  justify-content: center;
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  background-color: #724D93;
  color: #fbfafa; 
  font-weight: bold;
  width: 400px;
  padding: 8px 30px;
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


export default function ExportationData() {
  const {
    exitContainer,
    internalTransport,
    expenseEnterTerminal,
    expensesAgency,
    customs,
    flete,
    setExitContainer,
    setInternalTransport,
    setExpenseEnterTerminal,
    setExpensesAgency,
    setCustoms,
    setFlete,
  } = useComponentStore()

  return (
    <Column>
      <Card>
        <Title>Datos de Exportación</Title>
        <Label>Salida del Contenedor</Label>
        <Input
          placeholder="Placeholder"
          value={exitContainer}
          onChange={(e) => {
            setExitContainer(e.target.value);
            console.log("exitContainer:", e.target.value); // delete later
          }} />
        <Label>Transporte interno</Label>
        <Input
          placeholder="Placeholder"
          value={internalTransport}
          onChange={(e) => {
            setInternalTransport(e.target.value);
            console.log("internalTransport:", e.target.value); // delete later
          }} />
        <Label>Gastos de ingreso a terminal</Label>
        <Input
          placeholder="Placeholder"
          value={expenseEnterTerminal}
          onChange={(e) => {
            setExpenseEnterTerminal(e.target.value);
            console.log("expenseEnterTerminal:", e.target.value); // delete later
          }} />
        <Label>Gastos agencia</Label>
        <Input
          placeholder="Placeholder"
          value={expensesAgency}
          onChange={(e) => {
            setExpensesAgency(e.target.value);
            console.log("expensesAgency:", e.target.value); // delete later
          }} />
        <Label>Customs</Label>
        <Input
          placeholder="Placeholder"
          value={customs}
          onChange={(e) => {
            setCustoms(e.target.value);
            console.log("customs:", e.target.value); // delete later
          }} />
        <Label>Flete</Label>
        <Input
          placeholder="Placeholder"
          value={flete}
          onChange={(e) => {
            setFlete(e.target.value);
            console.log("flete:", e.target.value); // delete later
          }} />
      </Card>
    </Column>
  )
}
