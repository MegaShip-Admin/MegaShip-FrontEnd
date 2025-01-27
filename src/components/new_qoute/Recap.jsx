import styled from 'styled-components';
import useComponentStore from '../../stores/componentsStore';
import useProgressStore from "../../stores/progressStore";


const Wrap = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; 
  min-width: 1200px; 
  height: 580px;
  padding: 25px 45px 45px 45px;
  border: 1.8px solid #724D93; 
  border-radius: 20px;
  gap: 50px;
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

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 5px;
  width: fit-content;
  padding: 3px 25px;
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724D93;
  background-color: #fbfafa;
  cursor: pointer;
`;

const BotonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

const ScrollableContent = styled.div`
  width: fit-content;
  overflow-y: auto;
  overflow-x: hidden;
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


const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const Label = styled.label`
  font-weight: bold;
  color: #724D93; 
`;

const Pp = styled.p`
  color: #787878; 
  margin: 0;
  padding: 0;
`;
const Big = styled.h1`
  font-weight: bold;
  font-size: 25px;
  color: #724D93; 
  text-decoration: underline;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
padding: 10px 0;
align-items: center;
`;

const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowForList = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  gap: 15px;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding-right: 15px;
`;


export default function Recap() {
  const {
    company,
    name,
    email,
    phone,
    origin,
    destiny,
    incoterms,
    leaving,
    deposit,
    serviceType,
    estimatedDays,
    startDate,
    endDate,
    costs,
    exportationData,
    containerList
  } = useComponentStore();
  const { ActiveTab, selectedTransport, selectedType } = useProgressStore();

  return (
    <Wrap>
      <Card>
        <Title>Comprobar Información</Title>
        <Column>
          <Row>
            <Big>Tipo de Transporte: </Big>
          </Row>
          <Row>
            <Label> Tipo de Trabajo</Label><Pp> {ActiveTab}</Pp>
          </Row>
          <Row>
            <Label> Medio de Transporte:</Label> <Pp> {selectedTransport}</Pp>
          </Row>
          <Row>
            <Label> Tipo de Viaje:</Label> <Pp> {selectedType} </Pp>
          </Row>
          <Row>
            <Big>Caracteristicas del Trabajo </Big>
          </Row>
          <Row>
            <Label> Empresa:</Label> <Pp> {company} </Pp>
          </Row>
          <Row>
            <Label> Nombre:</Label> <Pp> {name} </Pp>
          </Row>
          <Row>
            <Label> Email:</Label> <Pp> {email} </Pp>
          </Row>
          <Row>
            <Label> Telefono:</Label> <Pp> {phone} </Pp>
          </Row>
          <Row>
            <Label> Origen:</Label> <Pp> {origin} </Pp>
          </Row>
          <Row>
            <Label> Destino:</Label> <Pp> {destiny} </Pp>
          </Row>
          <Row>
            <Label> IncoTerms:</Label> <Pp> {incoterms} </Pp>
          </Row>
        </Column>
        <Column>
          <Row>
            <Big> Lista de Cargas</Big>
          </Row>
          {(selectedTransport === 'Maritimo' && selectedType === 'Consolidado' || selectedTransport === 'Terrestre' && selectedType === 'Consolidado')
            ? (
              <ScrollableContent>
                {containerList.length > 0 ? (
                  containerList.map((container) => (
                    <Wrapper key={container.id}>
                      <RowsContainer>
                        <RowForList>
                          <Label>Tipo del Contenedor: </Label> <Pp>{container.containerType}</Pp>
                        </RowForList>
                        <RowForList>
                          <Label>Cantidad de Contenedores: </Label> <Pp>{container.containerCount}</Pp>
                        </RowForList>
                        {container.danger !== '' && (
                          <RowForList>
                            <Label>Peligroso: </Label> <Pp>{container.danger}</Pp>
                          </RowForList>
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
                {containerList.length > 0 ? (
                  containerList.map((container) => (
                    <Wrapper key={container.id}>
                      <RowsContainer>
                        <RowForList>
                          <Label>Tipo del Bulto: </Label> <Pp>{container.bulkType}</Pp>
                        </RowForList>
                        <RowForList>
                          <Label>Peso del Bulto: </Label> <Pp>{container.bulkWeight}</Pp>
                        </RowForList>
                        <RowForList>
                          <Label>Volumen Bulto: </Label> <Pp>{container.bulkVolume}</Pp>
                        </RowForList>
                        {container.danger !== '' && (
                          <RowForList>
                            <Label>Peligroso: </Label> <Pp>{container.danger}</Pp>
                          </RowForList>
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
        </Column>
        <Column>
          {(ActiveTab === "Exportación" && selectedType === "Exclusivo" ?
            null
            :
            <>
              <Row>
                <Big> Servicio</Big>
              </Row>
              <Row>
                <Label> Servicio:</Label> <Pp> {serviceType} </Pp>
              </Row>
              <Row>
                <Label> Tiempo de Viaje:</Label> <Pp> {estimatedDays} </Pp>
              </Row>
              <Row>
                <Label>Validez:</Label>
                <Pp>- {startDate} </Pp>
              </Row>
              <Row>
                <Pp style={{ paddingLeft: '80px' }}>- {endDate}</Pp>
              </Row>
            </>)}
          {(ActiveTab === "Importación" && selectedType === "Consolidado" ?
            <>
              <Row>
                <Big> Deposito</Big>
              </Row>
              <Row>
                <Label> Deposito:</Label> <Pp> {deposit} </Pp>
              </Row>
              <Row>
                <Label> Salida de Deposito:</Label> <Pp> {leaving} </Pp>
              </Row>
            </>
            : null)}
        </Column>
        <Column>
          <Row>
            <Big>Costos</Big>
          </Row>
          {(ActiveTab === "Importación" ?
            costs.map((cost) => (
              <Row key={cost.id} >
                <Label>{cost.label}:</Label>
                <Pp>{cost.value}</Pp>
              </Row>
            )) :
            exportationData.map((cost) => (
              <Row key={cost.id} >
                <Label>{cost.label}:</Label>
                <Pp>{cost.value}</Pp>
              </Row>
            ))
          )}
          <Row>
            <Big> Total:</Big>
            <Pp style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', }}>
              {(
                ActiveTab === "Importación"
                  ? costs.reduce((total, cost) => total + parseFloat(cost.value), 0)
                  : exportationData.reduce((total, cost) => total + parseFloat(cost.value), 0)
              ).toFixed(2)}
            </Pp>
          </Row>
          <BotonContainer>
            <Boton> Descargar</Boton>
          </BotonContainer>
        </Column>
      </Card>
    </Wrap>
  )
}
