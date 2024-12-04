import styled from "styled-components"
import Progress from "../components/ProgressBar"
import useStore from '../stores/store';

const StyledNewQuote = styled.div`
height: 85vh;
width: ${(props) => (props.$collapsed ? '94vw' : '83vw')};
background: red;
`
export default function NewQuote() {
  const { headerCollapsed } = useStore();

  return (
    <>
      <StyledNewQuote $collapsed={headerCollapsed}>
        <h1>NUEVA COTIZACION</h1>
      </StyledNewQuote>
      <Progress/>
    </>
  )
}
