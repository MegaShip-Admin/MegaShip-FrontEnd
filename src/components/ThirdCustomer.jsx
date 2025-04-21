import styled from "styled-components";
import useComponentStore from '../stores/componentsStore';

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
  position: absolute;
  left: 15px;
  top: -7px;
`;
const Text = styled.span`
  width: 196px;
  padding: 11px 20px;
  border: 2px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  outline: none;
`;
const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 11px 20px;
  padding: 0 18px;
  border: 2px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  outline: none;
`;

export default function ThirdCustomer() {
  const {
    company,
    setCompany,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone
  } = useComponentStore()

  return (
    <Wrapper>
      <Container>
        <ItemBox>
          <Label>Identificador</Label>
          <Text
            placeholder="Numero cotizacion"
          // value={future feature}
          > FZ1</Text>
        </ItemBox>
        <ItemBox>
          <Label>Contacto</Label>
          <Input
            placeholder="Fabricio"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log("company:", e.target.value); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <Label>Empresa</Label>
          <Input
            placeholder="Megaship"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              console.log("company:", e.target.value); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <Label>Email</Label>
          <Input
            placeholder="megaship@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("company:", e.target.value); // delete later
            }} />
        </ItemBox>
        <ItemBox>
          <Label>Telefono</Label>
          <Input
            placeholder="099888777"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              console.log("company:", e.target.value); // delete later
            }} />
        </ItemBox>
      </Container>
    </Wrapper>
  );
}