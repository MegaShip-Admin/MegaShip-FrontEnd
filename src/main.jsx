import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import styled from 'styled-components'
import AppRouter from './router/router'

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContainer>
      <AppRouter/>
    </MainContainer>
  </StrictMode>,
)
