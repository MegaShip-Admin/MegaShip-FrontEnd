import { useEffect } from 'react';
import styled from "styled-components";
import useProgressStore from "../stores/progressStore";
import Aereo from '../assets/Aereo.svg';
import Maritimo from '../assets/Maritimo.svg';
import Terrestre from '../assets/Terrestre.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 0;
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 250px;
  margin: 0 120px;
`

const Boxs = styled.button`
  width: 12vw;
  height: 15vh;
  border: ${(props) => (props.$isActive ? "solid #724D93;" : "solid #FBFAFA;")};
  border-radius: 35px;
  cursor: pointer;
  background: #FBFAFA;
`

const Icons = styled.img`
  width: 10vw;
`

export default function FirstSteps() {
  const {
    setSelectedTransport,
    selectedTransport,
    setSelectedType
  } = useProgressStore();

  useEffect(() => {
    setSelectedType('');
  }, [selectedTransport]);

  return (
    <Wrapper>
      <BoxContainer>
        <Boxs
          $isActive={selectedTransport === "Maritimo"}
          onClick={() => {
            setSelectedTransport('Maritimo');
          }}
        >
          <Icons src={Maritimo} alt="Maritimo" />
        </Boxs>
        <Boxs
          $isActive={selectedTransport === "Aereo"}
          onClick={() => {
            setSelectedTransport('Aereo');
          }}
        >
          <Icons src={Aereo} alt="Aereo" />
        </Boxs>
        <Boxs
          $isActive={selectedTransport === "Terrestre"}
          onClick={() => {
            setSelectedTransport('Terrestre');
          }}
        >
          <Icons src={Terrestre} alt="Terrestre" />
        </Boxs>
      </BoxContainer>
    </Wrapper>
  );
}