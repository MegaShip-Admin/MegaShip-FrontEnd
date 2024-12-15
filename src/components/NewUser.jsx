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
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1010;
`;

export default function NewUser({ showModal, toggleModal }) {
  return (
    <>
      {showModal && (
        <Suspension>
          <Modal>
            <h2>Agregando usuario</h2>
            <p>Nombre</p>
            <p>Email</p>
            <p>Telefono</p>
          
            <button onClick={toggleModal}>Cerrar</button>
          </Modal>
        </Suspension>
      )}
    </>
  );
}
