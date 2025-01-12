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

export default function Client() {
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
    <Column>
      <Card>
        <Title> Cliente </Title>
        <Label>Empresa</Label>
        <Input
          placeholder="Megaship"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
            console.log("company:", e.target.value); // delete later
          }} />
        <Label>Nombre</Label>
        <Input
          placeholder="Fabricio"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log("name:", e.target.value); // delete later
          }} />
        <Label>Email</Label>
        <Input
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("email:", e.target.value); // delete later
          }} />
        <Label>Telefono</Label>
        <Input
          placeholder="099888777"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            console.log("phone:", e.target.value); // delete later
          }} />
      </Card>
    </Column>
  )
}
