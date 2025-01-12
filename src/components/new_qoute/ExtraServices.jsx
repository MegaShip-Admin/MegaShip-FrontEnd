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
  border: ${(props) => (props.isActive ? "1.8px solid #724D93" : "1.8px solid #646464")};
  cursor: ${(props) => (props.isActive ? "auto" : "not-allowed")};
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
  background-color: ${(props) => (props.isActive ? "#724D93" : "#646464")};
  cursor: ${(props) => (props.isActive ? "auto" : "not-allowed")};
  color: #fbfafa; 
  font-weight: bold;
  width: 330px;
  padding: 8px 30px;
  border-radius: 20px;
  z-index: 1;
`;

const Label = styled.label`
  position: relative;
  top: 14px;
  left: 13px;
  background-color: #fbfafa;
  color: ${(props) => (props.isActive ? "#724D93" : "#646464")};
  cursor: ${(props) => (props.isActive ? "auto" : "not-allowed")};
  font-weight: bold;
  width: fit-content;
  padding: 0 5px;
  z-index:3;
`;

const Input = styled.input`
  width: 480px;
  padding: 11px 0 11px 18px;
  border: ${(props) => (props.isActive ? "1.8px solid #724D93" : "1.8px solid #646464 ")};
  cursor: ${(props) => (props.isActive ? "auto" : "not-allowed")};
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
`;

export default function ExtraServices() {
  const {
    extraServices,
    unifBill,
    setUnifBill,
    tlx,
    setTlx,
    insurance,
    setInsurance } = useComponentStore();

  return (
    <Column>
      <Card isActive={extraServices} >
        <Title isActive={extraServices}>Servicios Extra</Title>
        <Label isActive={extraServices}>Unif. Factura</Label>
        <Input
          isActive={extraServices}
          placeholder="USD"
          value={unifBill}
          onChange={(e) => {
            setUnifBill(e.target.value);
            console.log("UnifBill:", e.target.value); // delete later
          }} />
        <Label isActive={extraServices}>TLX</Label>
        <Input
          isActive={extraServices}
          placeholder="USD"
          value={tlx}
          onChange={(e) => {
            setTlx(e.target.value);
            console.log("TLX:", e.target.value); // delete later
          }} />
        <Label isActive={extraServices}>Seguro</Label>
        <Input
          isActive={extraServices}
          placeholder="USD"
          value={insurance}
          onChange={(e) => {
            setInsurance(e.target.value);
            console.log("Insurance:", e.target.value); // delete later
          }} />
      </Card>
    </Column>
  )
}
