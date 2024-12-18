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
  max-height: 510px;
  padding: 45px 20px 15px 45px;
  border: 1.5px solid #724D93; 
  border-radius: 20px;
  background-color: #fbfafa; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  position: relative;
`;

const ScrollableContent = styled.div`
  max-height: 500px;
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
  width: 400px;
  padding: 8px 30px;
  border-radius: 20px;
  z-index: 1000;
`;

const Label = styled.label`
  font-weight: bold;
  color: #724D93; 
`;

const Pp = styled.p`
  color: #787878; 
  padding: 7px;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BotonContainer = styled.div`
  display:flex;
  justify-content: center;
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

const Span = styled.span`
  font-size: 30px;
  font-weight: 400;
`;


export default function ListOfLoads() {
  //hay q modificar para q se creen dinamicament con estados

  return (
    <Column>
      <Card>
        <ScrollableContent>
          <Title>Lista de Cargas Asociadas</Title>
          <Wrapper>
            <RowsContainer>
              <Row>
                <Label>Tipo del Contenedor: </Label> <Pp>Dry</Pp>
              </Row>
              <Row>
                <Label>Tamaño del Contenedor: </Label> <Pp>20 ft.</Pp>
              </Row>
              <Row>
                <Label>Cantidad de Contenedores: </Label> <Pp>2</Pp>
              </Row>
            </RowsContainer>
            <BotonContainer>
              <Boton> Eliminar <Span>-</Span></Boton>
            </BotonContainer>
          </Wrapper>
          <Wrapper>
            <RowsContainer>
              <Row>
                <Label>Tipo del Contenedor: </Label> <Pp>High Cube</Pp>
              </Row>
              <Row>
                <Label>Tamaño del Contenedor: </Label> <Pp>40 ft.</Pp>
              </Row>
              <Row>
                <Label>Cantidad de Contenedores: </Label> <Pp>1</Pp>
              </Row>
            </RowsContainer>
            <BotonContainer>
              <Boton> Eliminar <Span>-</Span></Boton>
            </BotonContainer>
          </Wrapper>
          <Wrapper>
            <RowsContainer>
              <Row>
                <Label>Tipo del Contenedor: </Label> <Pp>Reefer</Pp>
              </Row>
              <Row>
                <Label>Tamaño del Contenedor: </Label> <Pp>30 ft.</Pp>
              </Row>
              <Row>
                <Label>Cantidad de Contenedores: </Label> <Pp>3</Pp>
              </Row>
            </RowsContainer>
            <BotonContainer>
              <Boton> Eliminar <Span>-</Span></Boton>
            </BotonContainer>
          </Wrapper>
          <Wrapper>
            <RowsContainer>
              <Row>
                <Label>Tipo del Contenedor: </Label> <Pp>Reefer</Pp>
              </Row>
              <Row>
                <Label>Tamaño del Contenedor: </Label> <Pp>30 ft.</Pp>
              </Row>
              <Row>
                <Label>Cantidad de Contenedores: </Label> <Pp>3</Pp>
              </Row>
            </RowsContainer>
            <BotonContainer>
              <Boton> Eliminar <Span>-</Span></Boton>
            </BotonContainer>
          </Wrapper>
          <Wrapper>
            <RowsContainer>
              <Row>
                <Label>Tipo del Contenedor: </Label> <Pp>Reefer</Pp>
              </Row>
              <Row>
                <Label>Tamaño del Contenedor: </Label> <Pp>30 ft.</Pp>
              </Row>
              <Row>
                <Label>Cantidad de Contenedores: </Label> <Pp>3</Pp>
              </Row>
            </RowsContainer>
            <BotonContainer>
              <Boton> Eliminar <Span>-</Span></Boton>
            </BotonContainer>
          </Wrapper>
          <Wrapper>
            <RowsContainer>
              <Row>
                <Label>Tipo del Contenedor: </Label> <Pp>Reefer</Pp>
              </Row>
              <Row>
                <Label>Tamaño del Contenedor: </Label> <Pp>30 ft.</Pp>
              </Row>
              <Row>
                <Label>Cantidad de Contenedores: </Label> <Pp>3</Pp>
              </Row>
            </RowsContainer>
            <BotonContainer>
              <Boton> Eliminar <Span>-</Span></Boton>
            </BotonContainer>
          </Wrapper>
        </ScrollableContent>
      </Card>
    </Column>
  )
}
