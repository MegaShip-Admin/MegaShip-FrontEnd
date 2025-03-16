import styled from "styled-components";
import Isologo from '../assets/Isologo.svg';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {useAuthStore} from '../stores/authStore';
import axios from 'axios';


const OtherContainer = styled.div`
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
const DivLogin = styled.form`
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
justify-content: space-around;
width: 82%;
margin-top: 11px;
`
const DivInterno = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`
const Button = styled.button`
background: #724D93;
margin-top: 15px;
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
// Icono de ocultar o mostrar contraseña
const IconPassword = styled.div`
position: absolute;
right: 8px;
top: 58%;
transform: translateY(-50%);
cursor: pointer;
font-size: 22px;
color: #724D93;
`
// texto de error al iniciar sesión
const ErrorText = styled.p`
color: #d91d1d;
font-weight: bold;
font-size: 16px;
margin-top: 12px;
text-align: left;
width: 100%;
`
export default function Login() {
  const [email, setemail] = useState(''); // guarda el correo
  const [password, setpassword] = useState('') // guarda la contraseña
  const [showPassword, setShowPassword] = useState(false); // Ocultar o mostrar contraseña
  const login = useAuthStore((state) => state.login); // obtiene la funcion de login 
  const navigate = useNavigate(); // crea función para rederigir
  const [userData, setUserData] = useState(null);
  const [Error, setError] = useState('');

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit ejecutado");
    console.log("Email:", email, "Password:", password);
    setError('');


  
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
  
    axios
      .post(`http://localhost:3000/vendedor/${email}`, { email, password })
      .then((response) => {
        setUserData(response.data);
        console.log("Usuario autenticado", response.data);
        login();
        navigate("/"); // Redirigir si el login es exitoso
      })
      .catch((error) => {
        setError("Email o contraseña incorrecta.");
        console.error("Error", error);
      });
  };
  
  
  return (
    <>
      <OtherContainer>
        <DivLeft>
          <LeftSide>
            <Img src={Isologo} alt="ISologo" />
          </LeftSide>
        </DivLeft>
        <RightSide>
          <DivLogin onSubmit={handleSubmit}>
            <InputContainer>
              <Label>Email</Label>
              <Input
                type='email'
                placeholder="Megaship@gmail.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Contraseña</Label>
              <Input
                type={showPassword ? 'text' : 'Password'}
                placeholder="********"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <IconPassword onClick={togglePassword}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </IconPassword>
            </InputContainer>
            <Div>
              <DivInterno>
                {Error && <ErrorText>{Error}</ErrorText>}
              </DivInterno>
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