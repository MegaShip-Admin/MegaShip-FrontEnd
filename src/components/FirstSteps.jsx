import styled from "styled-components";
import useProgressStore from "../stores/progressStore";
import Aereo from '../assets/Aereo.svg';
import Maritimo from '../assets/Maritimo.svg';
import Terrestre from '../assets/Terrestre.svg';

const StyledNewQuote = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`
const IMPEXP = styled.div`
  height: 15vh;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const ButtonGroup = styled.div`
  display: flex;
  height: 40%;
  border-radius: 16px;
  position: relative;
  width: 100%;
  overflow: hidden;
`
const Button = styled.button`
flex: 1;
  padding: 12px 24px;
  font-size: 30px;
  color: #fff;
  font-family: "Inter", sans-serif;
  background-color: ${({ $isActive }) => ($isActive ? "#724D93" : "#BEBDBF")};
  border: none;
  cursor: pointer;
  position: relative;
  margin-left: -5%;
  z-index: ${({ $isActive }) => ($isActive ? 2 : 1)};
  transition: all 0.3s ease;
  border-radius: ${({ $isActive }) => ($isActive ? "16px" : "0px")};
  width: ${({ $isActive }) => ($isActive ? "60%" : "40%")};
  &:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  &:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`
const BoxContainer = styled.div`
  height: 50vh;
  width: 65vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: row;
`
const BOXS = styled.button`
  width: 20vw;
  height: 35vh;
  border: 5px solid #724D93;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  background: #FBFAFA;
`
const Icons = styled.img`
  width: 15vw;
`
const ContainerBOX2 = styled.div`
  width: 20vw;
  height: 35vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
`
const IntBox = styled.button`
  width: 20vw;
  height: 17vh;
  border: 5px solid #724D93;
  border-radius: 25px;
  background: ${({ $isActive }) => ($isActive ? '#724D93' : '#FBFAFA')};
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? '#FFF' : '#724D93')};
  font-size: 35px;
  font-family: "Inter", sans-serif;
`
export default function FirstSteps() {
  const {
    ActiveTab,
    setActiveTab,
    setSelectedType,
    setSelectedTransport,
    BoxActive, setBoxActive, IntBoxActive, setIntBoxActive, setCurrentStep
  } = useProgressStore();

  // Maneja el clic en un tipo de transporte y reinicia el progreso
  const handleBoxclick = (boxType) => {
    setBoxActive(boxType); // Establece el transporte activo
    setCurrentStep(0); // Reinicia el progreso al paso inicial
  };

  return (
    <>
      <StyledNewQuote>
        <IMPEXP>
          <ButtonGroup>
            <Button
              $isActive={ActiveTab === 'Exportación'}
              onClick={() => {
                setActiveTab('Exportación'); // Cambia la pestaña activa
              }}
            >
              Exportación
            </Button>
            <Button
              $isActive={ActiveTab === 'Importación'}
              onClick={() => {
                setActiveTab('Importación'); // Cambia la pestaña activa
              }}
            >
              Importación
            </Button>
          </ButtonGroup>
        </IMPEXP>
        <BoxContainer>
          {BoxActive === 'Maritimo' ? (
            <ContainerBOX2>
              <IntBox
                $isActive={IntBoxActive === 'Consolidado'}
                onClick={() => {
                  setIntBoxActive('Consolidado');
                  setSelectedType('Consolidado');
                }}
              >
                Consolidado
              </IntBox>
              <IntBox
                $isActive={IntBoxActive === 'Exclusivo'}
                onClick={() => {
                  setIntBoxActive('Exclusivo');
                  setSelectedType('Exclusivo');
                }}
              >
                Exclusivo
              </IntBox>
            </ContainerBOX2>
          ) : (
            <BOXS
              $isActive={BoxActive === "Maritimo"}
              onClick={() => {
                handleBoxclick("Maritimo");
                setSelectedTransport('Maritimo');
              }}
            >
              <Icons src={Maritimo} alt="Maritimo" />
            </BOXS>
          )}
          {BoxActive === 'Aereo' ? (
            <ContainerBOX2>
              <IntBox
                $isActive={IntBoxActive === 'Común'}
                onClick={() => {
                  setIntBoxActive('Común');
                  setSelectedType('Común');
                }}
              >
                Común
              </IntBox>
              <IntBox
                $isActive={IntBoxActive === 'Courier'}
                onClick={() => {
                  setIntBoxActive('Courier');
                  setSelectedType('Courier');
                }}
              >
                Courier
              </IntBox>
            </ContainerBOX2>
          ) : (
            <BOXS
              $isActive={BoxActive === "Aereo"}
              onClick={() => {
                handleBoxclick("Aereo");
                setSelectedTransport('Aereo');
              }}
            >
              <Icons src={Aereo} alt="Aereo" />
            </BOXS>
          )}
          {BoxActive === 'Terrestre' ? (
            <ContainerBOX2>
              <IntBox
                $isActive={IntBoxActive === 'Consolidado'} do
                onClick={() => {
                  setIntBoxActive('Consolidado');
                  setSelectedType('Consolidado');
                }}
              >
                Consolidado
              </IntBox>
              <IntBox
                $isActive={IntBoxActive === 'Exclusivo'}
                onClick={() => {
                  setIntBoxActive('Exclusivo');
                  setSelectedType('Exclusivo');
                }}
              >
                Exclusivo
              </IntBox>
            </ContainerBOX2>
          ) : (
            <BOXS
              $isActive={BoxActive === "Terrestre"}
              onClick={() => {
                handleBoxclick("Terrestre");
                setSelectedTransport('Terrestre');
              }}
            >
              <Icons src={Terrestre} alt="Terrestre" />
            </BOXS>
          )}
        </BoxContainer>
      </StyledNewQuote>
    </>
  );
}
