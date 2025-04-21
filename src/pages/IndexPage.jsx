import React from 'react';
import Logo from '../assets/Logo.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
  background-color: #FBFAFA;
`;

const LogoImage = styled.img`
  width: 350px;
  height: 350px;
`;

export default function IndexPage() {
  return (
    <Container>
      <LogoImage src={Logo} alt="Mega Ship Logo" />
    </Container>
  );
}
