import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useStore from '../stores/store';
import Inicio from '../assets/BotonInicioVioleta.svg';
import Nuevo from '../assets/BotonCotizacionVioleta.svg';
import Lista from '../assets/BotonListaVioleta.svg';
import Users from '../assets/BotonGestionVioleta.svg';
import Setting from '../assets/Opciones.svg';
import InicioB from '../assets/BotonInicioBlanco.svg';
import NuevoB from '../assets/BotonCotizacionBlanco.svg';
import ListaB from '../assets/BotonListaBlanco.svg';
import UsersB from '../assets/BotonGestionBlanco.svg';
import SettingB from '../assets/OpcionesBlanco.svg';


const StyledHeader = styled.header`
  background-color: #724D93;
  height: 100vh;
  width: ${(props) => (props.collapsed ? '6vw' : '17vw')};
  display: flex;
  flex-direction: column;
  border-radius: 0 20px 20px 0;
  font-family: "Inter", sans-serif;
  transition: width 0.3s ease;
`;

const LogoLink = styled(Link)`
  display: flex;
  justify-content:center;
  align-items: center;
  text-decoration: none;
  color: #FFFFFF;
  margin-top: 108px;
  margin-bottom: 108px;
`;

const LogoCircle = styled.div`
  background-color: #FFFFFF;
  color: #724D93;
  font-size: 27px;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
`;

const LogoText = styled.div`
  color: #FFFFFF;
  font-size: 25px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: ${(props) => (props.collapsed ? 'none' : 'block')};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 25px;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#724D93' : '#FFFFFF')};
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : 'transparent')};
  font-size: 20px;
  padding: 22px 5px 22px 35px;
  border-radius: 30px 0 0 30px;
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.$bottom ? '150px' : '0')};
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    display: ${(props) => (props.collapsed ? 'none' : 'block')};
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export default function Header({ collapsed, onClick }) {
  const location = useLocation();

  return (
    <StyledHeader collapsed={collapsed} onClick={onClick}>
      <LogoLink to="/login">
        <LogoCircle>MB</LogoCircle>
        <LogoText collapsed={collapsed}>MegaBoss</LogoText>
      </LogoLink>
      <StyledNav>
        <StyledLink to="/" $isActive={location.pathname === '/'} collapsed={collapsed}>
          <img src={location.pathname === '/' ? Inicio : InicioB} alt="Inicio" />
          <span>Inicio</span>
        </StyledLink>
        <StyledLink to="/nueva_cotizacion" $isActive={location.pathname === '/nueva_cotizacion'} collapsed={collapsed}>
          <img src={location.pathname === '/nueva_cotizacion' ? Nuevo : NuevoB} alt="Nueva Cotización" />
          <span >Nueva Cotización</span>
        </StyledLink>
        <StyledLink to="/lista_cotizaciones" $isActive={location.pathname === '/lista_cotizaciones'} collapsed={collapsed}>
          <img src={location.pathname === '/lista_cotizaciones' ? Lista : ListaB} alt="Lista de Cotizaciones" />
          <span >Lista de Cotizaciones</span>
        </StyledLink>
        <StyledLink to="/gestion_usuarios" $isActive={location.pathname === '/gestion_usuarios'} collapsed={collapsed}>
          <img src={location.pathname === '/gestion_usuarios' ? Users : UsersB} alt="Gestión de Usuarios" />
          <span>Gestión de Usuarios</span>
        </StyledLink>
        <StyledLink to="/configuraciones" $isActive={location.pathname === '/configuraciones'} collapsed={collapsed} $bottom>
          <img src={location.pathname === '/configuraciones' ? Setting : SettingB} alt="Opciones" />
          <span>Opciones</span>
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}