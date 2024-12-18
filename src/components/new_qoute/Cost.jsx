import styled from 'styled-components';

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
  border: 1.5px solid #724D93; 
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
  border: 1.5px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
`;

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 5px;
  width: fit-content;
  padding: 3px 25px;
  border: 1.5px solid #724D93;
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

export default function Cost() {
  return (
    <Column>
      <Card>
        <Title>Costos</Title>
        <Label>Gastos de Origen</Label>
        <Input placeholder="placeholder" />
        <Label>Tarifa</Label>
        <Input placeholder="placeholder" />
        <Label>Servicios admin</Label>
        <Input placeholder="placeholder" />
        <Label>Handling fee</Label>
        <Input placeholder="placeholder" />
        <Label>Deposito</Label>
        <Input placeholder="placeholder" />
        <BotonContainer>
          <Boton> Servicios extras <Span>+</Span></Boton>
        </BotonContainer>
      </Card>
    </Column>
  )
}
