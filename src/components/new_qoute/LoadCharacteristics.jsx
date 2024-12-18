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

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Label = styled.label`
  position: relative;
  top: 28px;
  left: 14px;
  width: fit-content;
  background-color: #fbfafa;
  color: #724D93; 
  font-weight: bold;
  padding: 0 5px;
  z-index:3;
`;

const Input = styled.input`
  width: 100%;
  max-width: 355px;
  padding: 11px 0 11px 18px;
  margin-top: 20px;
  border: 1.5px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  color: #646464;
  background-color: #fbfafa;
  outline: none;
`;

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
  margin-top: 38px;
  font-size: 16px;
  color: #724D93;
  font-weight: bold;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  margin-top: 38px;
  border-radius: 50%;
  appearance: none;
  border: 1.5px solid #BEBDBF;
  background-color: #fbfafa;
  cursor: pointer;
  &:checked {
    background-color: #646464;
  }
`;

export default function LoadCharacteristics() {

  //put states so if the checkbox isnt marked then you cannot access the input

  return (
    <Column>
      <Card>
        <Title> Características de la carga</Title>
        <Container>
          <CheckboxWrapper>
            <Checkbox />
            <CheckboxLabel> Peligroso</CheckboxLabel>
          </CheckboxWrapper>
          <InputLabelWrapper>
            <Label>UN</Label>
            <Input placeholder="1000" />
          </InputLabelWrapper>
        </Container>
      </Card>
    </Column>
  )
}
