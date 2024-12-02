import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../stores/store';
import UserGroup from '../components/UserGroup'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${(props) => (props.$collapsed ? '94vw' : '83vw')};
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
  width: ${(props) => (props.$collapsed ? '94vw' : '83vw')};

`;


const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 80%;
  margin-bottom: 2vh;
`;

const FunctionButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const AddUserBoton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  border: solid 2px #724D93;
  padding: 10px 30px;
  color: #724D93;
  font-weight: 600;
  margin: 0px 30px 0 30px;
`;

const SuspendEmployee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #724D93;
  background-color: #724D93;
  border-radius: 30px;
  padding: 10px 30px;
  color: #ffffff;
  font-weight: 600;
`;

const Finder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  min-width: 340px;
  width: fit-content;
  border: solid 2px #724D93;
  padding: 5px;
  spam {
    margin-left: 20px;

  }
`;

const Magnifier = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  border: solid 2px #724D93;
  background-color: #724D93;

`;



export default function UserManagement() {
  const { headerCollapsed, expandHeader } = useStore();


  return (
    <>
      <Page $collapsed={headerCollapsed}>
        <Container $collapsed={headerCollapsed}>
          <Controls>
            <div>
              <Finder>
                <spam>Buscador</spam>
                <Magnifier />
              </Finder>
            </div>
            <FunctionButtons>
              <AddUserBoton>
                <span>Agregar Usuario +</span>
              </AddUserBoton>
              <SuspendEmployee>
                Suspender Empleado
              </SuspendEmployee>
            </FunctionButtons>
          </Controls>
          <UserGroup />
        </Container>
      </Page>
    </>
  );
}
