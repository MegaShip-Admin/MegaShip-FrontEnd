import React, { useState, useEffect } from 'react';
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
  justify-items:start;
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
  top: -28px;
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

const UserBox = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const InputsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  width: 65vw;
  height: 100%;
  color: #787878;
`;

const TextField = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  height: 40px;
  width: 85%;
  min-height: 25px;
  border: solid 1.8px #724D93;
  padding-left: 15px;
  color: #787878;
`;

const SpamLabel = styled.div`
  justify-content: space-between;
  position: relative;
  top: 10px;
  left: 25px;
  background-color: aliceblue;
  font-weight: 600;
  width: fit-content;
  padding: 0 15px 0 5px;
`;

const ProfilePicArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  height: 100%;
  width: 34vw;
`;

const UserPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 18%;
  background-color: #724D93;
  height: 150px;
  width: 150px;
  color: #ffff;
  font-size: xx-large;
  font-weight: 700;
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
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

function addUser(newArray, callback) {
  console.log('agregar este usuario', newArray);
  if (callback) {
    callback();
  }
}

export default function NewUser({ showModal, toggleModal }) {
  let letters = 'PR';
  return (
    <>
      {showModal && (
        <Suspension>
          <Modal>
            <BoxTitle>
              <h2>Nuevo Empleado</h2>
            </BoxTitle>
            <UserBox>
              <InputsSection>
                <SpamLabel>
                  Nombre
                </SpamLabel>
                <TextField>
                  Pablo Riveiro
                </TextField>
                <SpamLabel>
                  Email
                </SpamLabel>
                <TextField>
                </TextField>
                <SpamLabel>
                  Telefono
                </SpamLabel>
                <TextField>
                </TextField>
                <ButtonsArea>
                  <OptionsButtons onClick={toggleModal}>
                    Cerrar
                  </OptionsButtons>
                  <OptionsButtons onClick={() => addUser([{ usuario: 'ejemplo' }], toggleModal)}>
                    Agregar
                  </OptionsButtons>
                </ButtonsArea>
              </InputsSection>
              <ProfilePicArea>
                <UserPic>{letters}</UserPic>
              </ProfilePicArea>
            </UserBox>
          </Modal>
        </Suspension>
      )}
    </>
  );
}
