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
  max-height: 496px;
  padding: 45px 20px 15px 45px;
  border: 1.5px solid #724D93; 
  border-radius: 20px;
  gap: 5px;
  background-color: #fbfafa; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  position: relative;
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #724D93;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5c3b77;
  }
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
  width: 330px;
  padding: 8px 30px;
  border-radius: 20px;
  z-index: 1000;
`;

const BotonContainer = styled.div`
  display:flex;
  justify-content: right;
  margin-right: 20px;
`;

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 5px;
  width: 160px;
  padding: 3px 0;
  border: 1.5px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724D93;
  background-color: #fbfafa;
  cursor: pointer;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #646464;
  margin: 0;
  text-align: center;
  word-wrap: break-word;
  white-space: normal;
`;


export default function Clarifications() {
  return (
    <Column>
      <Card>
        <ScrollableContent>
          <Title> Aclaraciones</Title>
          <Paragraph> Terminos y condiciones </Paragraph>
        </ScrollableContent>
        <BotonContainer>
          <Boton> Editar </Boton>
        </BotonContainer>
      </Card>
    </Column>
  )
}
