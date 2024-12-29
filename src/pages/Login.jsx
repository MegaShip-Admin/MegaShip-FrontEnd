import styled from "styled-components";
import Isologo from '../assets/Isologo.svg';
import { useState, useEffect } from "react";
import {create} from 'zustand';
import { useNavigate } from 'react-router-dom';
import {users} from '../pages/pruebas';

const OtherContainer = styled.div `
display: flex;
flex-direction: row;
width: 100vw;
height: 100vh;
`
const DivLeft = styled.div`
width: 55vw;
height: 100vh;
`
const LeftSide = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 99%;
height: 100%;
background: #724D93;
border-radius: 0 30px 30px 0;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`
const Img = styled.img`
width: 65%;
`
const RightSide = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 45vw;
background: #fff;
`
const DivLogin = styled.div`
width: 50%;
height: 45%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid #724D93;
border-radius: 50px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`
const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 82%;
`
const DivInterno = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`
const CheckBox = styled.input.attrs({ type: 'checkbox' })`
width: 15px;
height: 15px;
border-radius: 5px;
margin-right: 10px;
background-color: ${props => (props.checked ? '#724D93' : '#fff')};
appearance: none;
border: 1px solid #724D93;

&:checked {
  background-color: #724D93;
}
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
margin-top: 48px;
width: 50%;
height: 13%;
border-radius: 25px;
border: none;
color: #fff;
font-size: 20px;
cursor: pointer;
font-weight: bold;
font-family: "Inter", sans-serif;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`
const InputContainer = styled.div`
  position: relative;
  width: 82%;
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

const useStore = create((set) => ({
  rememberMe: false,
  toggleRememberMe: () => set((state) => ({rememberMe: !state.rememberMe})),
}));

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (user, token) => set({ user, token, isAuthenticated: true}), // inicia sesión
  logout: () => set({ user: null, token: null, isAuthenticated: false}), // cierra sesión
}))

export default function Login() {
  const {rememberMe, toggleRememberMe} = useStore(); // para el checkbox
  const [email, setemail] = useState(''); // guarda el correo
  const [password, setpassword] = useState('') // guarda la contraseña
  const login = useAuthStore((state) => state.login); // obtiene la funcion de login 
  const navigate = useNavigate(); // crea funsion para rederigir

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // const user = users.find((u) => u.email === email && u.password === password);
    
    // if (user) {
    //   login( user.email, 'fake-token');
    //   console.log("Redirigiendo...");
    //   navigate('/configuraciones')
    // } else {
    //   alert('Credenciales incorrectas');
    // }
    useEffect(() => {
      console.log('email', email);
      console.log('pass', password);
      
      
    }, [email, password]);
    navigate('/')
  };
  
  return (
    <>
      <OtherContainer>
        <DivLeft>
          <LeftSide>
            <Img src={Isologo} alt="ISologo"/>
          </LeftSide>
        </DivLeft>
        <RightSide>
          <DivLogin onSubmit={handleSubmit}>
            <InputContainer>
              <Label>Email</Label>
              <Input
                type= 'email'
                placeholder="Megaship@gmail.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Contraseña</Label>
              <Input
                type='password'
                placeholder="********"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </InputContainer>
            <Div>
              <DivInterno>
                <CheckBox
                  type="checkbox"
                  checked={rememberMe}
                  onChange={toggleRememberMe}/>
                <Premember>Recuerdame</Premember>
              </DivInterno>
              <P>Olvide mi contraseña</P>
            </Div>
            <Button type="submit" >
              Iniciar Sesión
            </Button>
          </DivLogin>
        </RightSide>
      </OtherContainer>
    </>
  )
}