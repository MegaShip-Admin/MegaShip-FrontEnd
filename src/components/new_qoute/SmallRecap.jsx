import styled from 'styled-components';
import useComponentStore from '../../stores/componentsStore';
import useProgressStore from "../../stores/progressStore";

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
  min-height: 500px;
  max-height: 510px;
  padding: 45px 20px 15px 45px;
  border: 1.8px solid #724D93; 
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
  margin-bottom: 10px;
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export default function SmallRecap() {
  const {
    containerList,
    incoterms,
    origin,
    destiny,
  } = useComponentStore();
  const { ActiveTab, selectedTransport, selectedType } = useProgressStore();

  return (
    <Column>
      <Card>
        {
          (selectedTransport === 'Maritimo' && selectedType === 'Exclusivo' || selectedTransport === 'Terrestre' && selectedType === 'Consolidado')
            ? (
              <ScrollableContent>
                <Title>Resumen de las Cargas</Title>
                {(ActiveTab === "Importación" ?
                  <Row>
                    <Label>Origen: </Label> <Pp>{origin}</Pp>
                  </Row> :
                  <Row>
                    <Label>Destino: </Label> <Pp>{destiny}</Pp>
                  </Row>
                )}
                <Row>
                  <Label>Incoterm: </Label> <Pp>{incoterms}</Pp>
                </Row>
                {containerList.length > 0 ? (
                  containerList.map((container) => (
                    <Wrapper key={container.id}>
                      <RowsContainer>
                        <Row>
                          <Label>Tipo del Contenedor: </Label> <Pp>{container.containerType}</Pp>
                        </Row>
                        <Row>
                          <Label>Cantidad de Contenedores: </Label> <Pp>{container.containerCount}</Pp>
                        </Row>
                        {container.danger && (
                          <Row>
                            <Label>Peligroso: </Label> <Pp>{container.danger}</Pp>
                          </Row>
                        )}
                      </RowsContainer>
                    </Wrapper>
                  ))
                ) : (
                  <Pp>No hay cargas asociadas.</Pp>
                )}
              </ScrollableContent>
            )
            : (
              <ScrollableContent>
                <Title>Resumen del Presupuesto</Title>
                {(ActiveTab === "Importación" ?
                  <Row>
                    <Label>Origen: </Label> <Pp>{origin}</Pp>
                  </Row> :
                  <Row>
                    <Label>Destino: </Label> <Pp>{destiny}</Pp>
                  </Row>
                )}
                <Row>
                  <Label>Incoterm: </Label> <Pp>{incoterms}</Pp>
                </Row>
                {containerList.length > 0 ? (
                  containerList.map((container) => (
                    <Wrapper key={container.id}>
                      <RowsContainer>
                        <Row>
                          <Label>Tipo del Bulto: </Label> <Pp>{container.bulkType}</Pp>
                        </Row>
                        <Row>
                          <Label>Peso del Bulto: </Label> <Pp>{container.bulkWeight}</Pp>
                        </Row>
                        <Row>
                          <Label>Volumen Bulto: </Label> <Pp>{container.bulkVolume}</Pp>
                        </Row>
                        {container.danger && (
                          <Row>
                            <Label>Peligroso: </Label> <Pp>{container.danger}</Pp>
                          </Row>
                        )}
                      </RowsContainer>
                    </Wrapper>
                  ))
                ) : (
                  <Pp>No hay cargas asociadas.</Pp>
                )}
              </ScrollableContent>
            )
        }
      </Card>
    </Column>
  )
}
