import React from 'react';
import Logo from '../assets/LogoMegaShip.svg';
import Setting from '../assets/Opciones.svg'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 250px;
`;

export default function IndexPage() {
  return (
    <Container>
      <LogoImage src={Logo} alt="Mega Ship Logo" />
    </Container>
  );
}
