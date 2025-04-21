import styled from "styled-components";
import useComponentStore from "../stores/componentsStore";
import useProgressStore from "../stores/progressStore";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 120px;
  gap: 20px;
`;
const ItemBox = styled.div`
  display: flex;
  background-color: #fbfafa;
  position: relative;
`;
const Label = styled.label`
  color: #724d93;
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  padding: 0 5px;
  background-color: #fbfafa;
  z-index: 1;
  margin-left: 30px;
`;
const BotonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;
const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  padding: 3px 11px;
  border: 2px solid #724d93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724d93;
  background-color: #fbfafa;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 30px;
  font-weight: 400;
`;
const Pp = styled.p`
  color: #787878;
  margin-left: 5px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UnderlineLabel = styled.label`
  color: #724d93;
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  padding: 0 5px;
  background-color: #fbfafa;
  z-index: 1;
  text-decoration: underline;
`;
const LabelTwo = styled.label`
  color: #724d93;
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  padding: 0 5px;
  background-color: #fbfafa;
  z-index: 1;
`;

export default function DisplayContainer() {
  const { containerList, removeContainerById } = useComponentStore();
  const { selectedType } = useProgressStore();

  const handleRemove = (id) => {
    removeContainerById(id);
  };

  return (
    <Wrapper>
      <Container>
        {selectedType === "lcl" || selectedType === "ltl" ? (
          <>
            <UnderlineLabel>Lista de Cargas Asociadas</UnderlineLabel>
            {containerList.length > 0 ? (
              <>
                {containerList.map((container) => (
                  <SmallWrapper key={container.id}>
                    <ItemBox>
                      <Row>
                        <Label>Mercaderia: </Label>{" "}
                        <Pp>{container.mercaderia}</Pp>
                      </Row>
                      {container.danger && (
                        <Row>
                          <Label>Peligroso: </Label> <Pp> Si</Pp>
                          {/* <Label>Peligroso: </Label> <Pp>{container.danger}</Pp> */}
                        </Row>
                      )}
                      <Row>
                        <Label>Tipo: </Label> <Pp>{container.bulkType}</Pp>
                      </Row>
                      <Row>
                        <Label>Peso: </Label> <Pp>{container.bulkWeight}</Pp>
                      </Row>
                      <Row>
                        <Label>Volumen: </Label> <Pp>{container.bulkVolume}</Pp>
                      </Row>
                      {container.costValues &&
                        container.costValues.length > 0 && (
                          <>
                            {container.costValues.map((cost, index) => (
                              <Row key={index}>
                                <Label>{cost.label} :</Label>
                                <Pp>{cost.value}</Pp>
                              </Row>
                            ))}
                          </>
                        )}
                    </ItemBox>
                    <BotonContainer>
                      <Boton onClick={() => handleRemove(container.id)}>
                        Eliminar <Span>-</Span>
                      </Boton>
                    </BotonContainer>
                  </SmallWrapper>
                ))}
                <LabelTwo>
                  <ItemBox>
                      <Pp style={{fontWeight: "bold",color: "black",fontSize: "20px",}}>
                        Gastos Totales:
                        {containerList
                            .flatMap(container => container.costValues)
                            .reduce((total, cost) => total + parseFloat(cost.value), 0)
                            .toFixed(2)
                        }
                      </Pp>
                    </ItemBox>
                </LabelTwo>
              </>
            ) : (
              <Pp>No hay cargas asociadas.</Pp>
            )}
          </>
        ) : (
          <>
            <UnderlineLabel>Lista de Cargas Asociadas</UnderlineLabel>
            {containerList.length > 0 ? (
              <>
                {containerList.map((container) => (
                  <SmallWrapper key={container.id}>
                    <ItemBox>
                      <Row>
                        <Label>Mercaderia: </Label>{" "}
                        <Pp>{container.mercaderia}</Pp>
                      </Row>
                      {container.danger && (
                        <Row>
                          <Label>Peligroso: </Label> <Pp> Si</Pp>
                          {/* <Label>Peligroso: </Label> <Pp>{container.danger}</Pp> */}
                        </Row>
                      )}
                      <Row>
                        <Label>Tipo: </Label> <Pp>{container.containerType}</Pp>
                      </Row>
                      <Row>
                        <Label>Tamaño: </Label>{" "}
                        <Pp>{container.containerSize}</Pp>
                      </Row>
                      <Row>
                        <Label>Cantidad: </Label>{" "}
                        <Pp>{container.containerCount}</Pp>
                      </Row>
                      <Row>
                        <Label>Peso: </Label>{" "}
                        <Pp>{container.containerCount}</Pp>
                      </Row>
                      {container.costValues &&
                        container.costValues.length > 0 && (
                          <>
                            {container.costValues.map((cost, index) => (
                              <Row key={index}>
                                <Label>{cost.label} :</Label>
                                <Pp>{cost.value}</Pp>
                              </Row>
                            ))}
                          </>
                        )}
                    </ItemBox>
                    <BotonContainer>
                      <Boton
                        $eliminar
                        onClick={() => handleRemove(container.id)}
                      >
                        Eliminar <Span>-</Span>
                      </Boton>
                    </BotonContainer>
                  </SmallWrapper>
                ))}
                <LabelTwo>
                  <ItemBox>
                    <Pp style={{fontWeight: "bold",color: "black",fontSize: "20px",}}>
                      Gastos Totales:
                      {containerList
                          .flatMap(container => container.costValues)
                          .reduce((total, cost) => total + parseFloat(cost.value), 0)
                          .toFixed(2)
                      }
                    </Pp>
                  </ItemBox>
                </LabelTwo>
              </>
            ) : (
              <Pp>No hay cargas asociadas.</Pp>
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
}
