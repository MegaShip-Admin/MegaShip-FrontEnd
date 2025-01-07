import React from 'react';
import styled from 'styled-components';

const Suspension = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* color negro semi-transparente */
  z-index: 1000; /* asegúrate de que esté por encima de otros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: start;
  align-items: center;
  padding: 2px 8vh;
  background-color: #fbfafa; 
  border-radius: 30px;
  color: #724D93;
  height: 45vb;
  width: 40vw;
  border: 1.8px solid #724D93; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  z-index: 1010;
`;

const BoxTitle = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  top: -35px;
  border-radius: 30px;
  color: #fbfafa;
  background-color: #724D93;
  font-weight: 300;
  height: 45px;
  width: 250px;
  padding: 2px 90px;
  h2 {
    position: relative;
    top: -11px;
    left: 20px;
  }
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 125px;
  width: 70%;
  height: 15%;
  font-weight: 200;
`;

const OptionsButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1.8 #724D93;
  background-color: #724D93;
  border-radius: 30px;
  padding: 2px 30px;
  height: 35px;
  color: #ffffff;
  font-weight: 600;
`;

const NormalText = styled.div`
  text-align: center;
  padding: 30px 50px;
  color: #323232;
`;

export default function SuspendEmployee({ showSuspendModal, toggleSuspendModal, handleSuspendUser }) {
  return (
    <>
      {showSuspendModal && (
        <Suspension>
          <Modal>
            <BoxTitle>
              <h2>Suspender Usuario</h2>
            </BoxTitle>
            <NormalText>
              ¿Confirmas que quieres suspender a este usuario?
            </NormalText>
            <ButtonsArea>
              <OptionsButtons onClick={toggleSuspendModal}>
                Cerrar
              </OptionsButtons>
              <OptionsButtons onClick={handleSuspendUser}>
                Suspender
              </OptionsButtons>
            </ButtonsArea>
          </Modal>
        </Suspension>
      )}
    </>
  );
}
