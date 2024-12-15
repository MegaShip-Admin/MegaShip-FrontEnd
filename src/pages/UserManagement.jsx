import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../stores/store';
import UserGroup from '../components/UserGroup';
import NewUser from '../components/NewUser';

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
  height: 5%;
  width: 80%;
  margin-top: 6vh;
  margin-bottom: 1.1vh;
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
  min-width: 300px;
  width: fit-content;
  border: solid 2px #724D93;
  padding: 5px;
 .inputText {
  margin-left: 5px;
  border: none;
  outline: none;
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
  const [searching, setSearching] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [showModal, setShowModal] = useState(false);  // show newUser Modal
  const toggleModal = () => { setShowModal(!showModal); };
  return (
    <>
      <NewUser showModal={showModal} toggleModal={toggleModal} />
      <Page $collapsed={headerCollapsed}>
        <Container $collapsed={headerCollapsed}>
          <Controls>
            <div>
              <Finder>
                <form onSubmit={handleSubmit}>
                  <input
                    className='inputText'
                    type='text'
                    placeholder='Buscador'
                    value={searching}
                    onChange={(e) => setSearching(e.target.value)}
                  />
                

                </form>
                  <Magnifier/>
              </Finder>
            </div>
            <FunctionButtons>
              <AddUserBoton onClick={toggleModal}>
                <span>Agregar Usuario +</span>
              </AddUserBoton>
              <SuspendEmployee>
                Suspender Empleado
              </SuspendEmployee>
            </FunctionButtons>
          </Controls>
          <UserGroup searching={searching} />
        </Container>
      </Page>
    </>
  );
}
