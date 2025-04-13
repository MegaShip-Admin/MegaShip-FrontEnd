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
  height: 65vb;
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
  input {
    border: 0;
    width: 90%;
    background-color: #fbfafa;
  }

input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
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
  background-color: #fbfafa;
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

  function addUser(newUser, callback) {
    fetch("http://localhost:3000/vendedor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al agregar usuario");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Usuario agregado exitosamente:", data);
        if (callback) {
          callback();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }



export default function NewUser({ showModal, toggleModal }) {
  let letters = 'MS';
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rango, setRango] = useState("");
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
                <form onSubmit={(e) => { e.preventDefault(); addUser({ name, email, phone, password, rango }, toggleModal); }}>
                  <SpamLabel>
                    Nombre
                  </SpamLabel>
                  <TextField>
                    <input type='text' value={name}
                      onChange={(e) => setName(e.target.value)} />
                  </TextField>
                  <SpamLabel>
                    Email
                  </SpamLabel>
                  <TextField>
                    <input type='text' value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </TextField>
                  <SpamLabel>
                    Telefono
                  </SpamLabel>
                  <TextField>
                    <input type='text' value={phone}
                      onChange={(e) => setPhone(e.target.value)} />
                  </TextField>
                  <SpamLabel>
                    Password
                  </SpamLabel>
                  <TextField>
                    <input type='text' value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </TextField>
                  <SpamLabel>
                    Rango
                  </SpamLabel>
                  <TextField>
                    <input type='text' value={rango}
                      onChange={(e) => setRango(e.target.value)} />
                  </TextField>
                  <ButtonsArea>
                    <OptionsButtons onClick={toggleModal}>
                      Cerrar
                    </OptionsButtons>
                    <OptionsButtons onClick={(e) => {
                      e.preventDefault();
                      addUser({ name, email, phone, password, rango}, toggleModal);
                    }}>
                      Agregar
                    </OptionsButtons>
                  </ButtonsArea>
                </form>
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
