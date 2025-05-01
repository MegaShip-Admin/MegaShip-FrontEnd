import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/LogoMegaShip.svg';
import Nuevo from '../../assets/BotonCotizacionVioleta.svg';
import Lista from '../../assets/BotonListaVioleta.svg';
import Users from '../../assets/BotonGestionVioleta.svg';
import Setting from '../../assets/Opciones.svg';
import LogoBlanco from '../../assets/LogoMegaShipBlanco.svg';
import NuevoB from '../../assets/BotonCotizacionBlanco.svg';
import ListaB from '../../assets/BotonListaBlanco.svg';
import UsersB from '../../assets/BotonGestionBlanco.svg';
import SettingB from '../../assets/OpcionesBlanco.svg';

const StyledHeader = styled.header`
  background-color: #724D93;
  height: 9vh;
  width: 100vw;
  display: flex;
  font-family: "Inter", sans-serif;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const StyledNav = styled.nav`
  display: flex;
  padding: 15px 25px;
  width: 100%;
`;

const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#724D93' : '#FFFFFF')};
  background-color: ${(props) => (props.$isActive ? '#FFFFFF' : 'transparent')};
  font-size: 20px;
  padding: 22px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  ${(props) => props.$last && 'margin-left: auto;'}
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#724D93' : '#FFFFFF')};
  background-color: ${(props) => (props.$isActive ? 'transparent' : 'transparent')};
  padding: 20px 15px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
`;

export default function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <LogoContainer
        to="/" $isActive={location.pathname === '/'} >
        <img src={location.pathname === '/' ? Logo : LogoBlanco} alt="Inicio" />
      </LogoContainer>
      <StyledNav>
        <LinksContainer>
          <StyledLink to="/nueva_cotizacion" $isActive={location.pathname === '/nueva_cotizacion'} >
            <img src={location.pathname === '/nueva_cotizacion' ? Nuevo : NuevoB} alt="Nueva Cotización" />
            <span>Nueva Cotización</span>
          </StyledLink>
          <StyledLink to="/lista_cotizaciones" $isActive={location.pathname === '/lista_cotizaciones'} >
            <img src={location.pathname === '/lista_cotizaciones' ? Lista : ListaB} alt="Lista de Cotizaciones" />
            <span >Lista de Cotizaciones</span>
          </StyledLink>
          <StyledLink to="/gestion_usuarios" $isActive={location.pathname === '/gestion_usuarios'}>
            <img src={location.pathname === '/gestion_usuarios' ? Users : UsersB} alt="Gestión de Usuarios" />
            <span>Gestión de Usuarios</span>
          </StyledLink>
        </LinksContainer>
        <StyledLink to="/configuraciones" $isActive={location.pathname === '/configuraciones'} $last>
          <img src={location.pathname === '/configuraciones' ? Setting : SettingB} alt="Opciones" />
          <span>Opciones</span>
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}