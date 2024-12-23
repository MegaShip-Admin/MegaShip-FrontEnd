import styled from "styled-components";
import Isologo from '../assets/Isologo.svg';
import { useState } from "react";

const OtherContainer = styled.div `
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
`
const LeftSide = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 55vw;
background: #724D93;
border-radius: 0 30px 30px 0;
`
const Img = styled.img`
widht: 15px;`

const RightSide = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 45vw;
background: #fff;
`
const DivLogin = styled.div`
width: 50%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid #724D93;
border-radius: 50px;
`
const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 75%;
`
const DivInterno = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`
const CheckBox = styled.input`
width: 15px;
height: 15px;
border-radius: 5px;
margin-right: 10px;
background-color: ${props => (props.checked ? '#724D93' : '#fff')};
`
const Premember = styled.p`
font-size: 16px;
color: #724D93;
`
const P = styled.p`
font-size: 16px;
color: #724D93;
font-weight: bold;
cursor: pointer;
`
const Button = styled.button`
background: #724D93;
margin-top: 50px;
width: 50%;
height: 10%;
border-radius: 25px;
border: 2px solid #fff;
color: #fff;
font-size: 20px;
cursor: pointer;
font-weight: bold;
`
const InputContainer = styled.div`
  position: relative;
  width: 75%;
  margin-top: 20px;
`
const Input = styled.input`
  background-color: #fff;
  height: 40px;
  width: 95%;
  border-radius: 25px;
  border: 2px solid #724D93;
  outline: none;
  padding-left: 18px;
  font-size: 16px;
`
const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 15px;
  background-color: #fff;
  color: #724D93;
  font-weight: bold;
  font-size: 16px;
  padding: 0 5px;
  
`
export default function Login() {
  const [rememberMe, setRememberMe] = useState(false); // Estado para el checkbox

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe); // Actualiza el estado cuando el checkbox cambia
  };
  
  return (
    <>
      <OtherContainer>
        <LeftSide>
          <Img src={Isologo} alt="ISologo"/>
        </LeftSide>
        <RightSide>
          <DivLogin>
            <InputContainer>
              <Label>Email</Label>
              <Input placeholder="Megaship@gmail.com"/>
            </InputContainer>
            <InputContainer>
              <Label>Contraseña</Label>
              <Input placeholder="********"/>
            </InputContainer>
            <Div>
              <DivInterno>
                <CheckBox
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}/>
                <Premember>Recuerdame</Premember>
              </DivInterno>
              <P>Olvide mi contraseña</P>
            </Div>
            <Button>
              Iniciar Sesión
            </Button>
          </DivLogin>
        </RightSide>
      </OtherContainer>
    </>
  )
}