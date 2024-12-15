import React from "react"
import DataTable from 'react-data-table-component';
import styled from "styled-components"
// import "./ListOfQuotes.css";

import aereo from '../assets/Mini_Aereo.svg';
import terrestre from '../assets/Mini_Terrestre.svg';
import maritimo from '../assets/Mini_Maritimo.svg';

const ListOfQuotes = () => {

  const columns = [
    { name: "Transporte", selector: row => row.transporte, sortable: true },
    { name: "Flujo", selector: row => row.flujo, sortable: true },
    { name: "Empresa", selector: row => row.empresa, sortable: true },
    { name: "Cliente", selector: row => row.cliente, sortable: true },
    { name: "Origen", selector: row => row.origen, sortable: true },
    { name: "Destino", selector: row => row.destino, sortable: true },
    { name: "Costo", selector: row => row.costo, sortable: true },
    { name: "Fecha", selector: row => row.fecha, sortable: true },
    { name: "Estado", selector: row => row.estado, sortable: true },
  ]

  const data = [
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Importación', empresa: 'Empresa D', cliente: 'Cliente 04', origen: 'China', destino: 'Uruguay', costo: '$250', fecha: '04/12/2024', estado: 'Pendiente' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa E', cliente: 'Cliente 5', origen: 'Estados Unidos', destino: 'Uruguay', costo: '$400', fecha: '05/12/2024', estado: 'Pendiente' },
    { transporte: <img src={terrestre} alt="Terrestre" />, flujo: 'Importación', empresa: 'Empresa F', cliente: 'Cliente 6', origen: 'Argentina', destino: 'Uruguay', costo: '$150', fecha: '06/12/2024', estado: 'Sin terminar' },
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Importación', empresa: 'Empresa G', cliente: 'Cliente 7', origen: 'España', destino: 'Uruguay', costo: '$350', fecha: '07/12/2024', estado: 'Pendiente' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa H', cliente: 'Cliente 8', origen: 'China', destino: 'Uruguay', costo: '$500', fecha: '08/12/2024', estado: 'Sin terminar' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa I', cliente: 'Cliente 9', origen: 'Brasil', destino: 'Uruguay', costo: '$200', fecha: '09/12/2024', estado: 'Pendiente' },
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Importación', empresa: 'Empresa J', cliente: 'Cliente 10', origen: 'China', destino: 'Uruguay', costo: '$300', fecha: '10/12/2024', estado: 'Pendiente' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa K', cliente: 'Cliente 11', origen: 'Alemania', destino: 'Uruguay', costo: '$450', fecha: '11/12/2024', estado: 'Sin terminar' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Exportación', empresa: 'Empresa A', cliente: 'Cliente 01', origen: 'Uruguay', destino: 'China', costo: '$100', fecha: '01/12/2024', estado: 'Sin terminar' },
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Exportación', empresa: 'Empresa L', cliente: 'Cliente 12', origen: 'Uruguay', destino: 'Estados Unidos', costo: '$600', fecha: '12/12/2024', estado: 'Pendiente' },
    
    
]

  
return (
  <Container>
    <ListContainer>
      <StyledDataTable
        columns={columns}
        data={data}
        selectableRows // CheckBox
        fixedHeader // Scroll
        fixedHeaderScrollHeight="500px" // Altura del scroll
        onSelectedRowsChange={(data) => console.log(data)} // Muestra datos en consola
      />
    </ListContainer>
  </Container>
);
};

export default ListOfQuotes;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 99vh;
border: 5px solid red;
`;

const ListContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid #724d93;
border-radius: 20px;
`;

// Data_Table_CSS
const StyledDataTable = styled(DataTable)`
.rdt_Table {
  min-width: 75vw;
  box-sizing: border-box;
  
}

.rdt_TableRow {
  margin: 0;
  background-color: #fbfafa !important;

  &:hover {
    background-color: #bebdbf !important;
  }
}

.rdt_TableCell {
  text-align: center;
  font-size: 17px;
  padding: 18px;
  color: #646464;
  font-weight: 400;

  img {
    width: 40px;
    height: auto;
    padding-left: 25px;
  }
}

.rdt_TableHeadRow {
  background-color: #724d93 !important;
  color: #ffffff;
  font-size: 17px;
  padding: 3px;
  font-weight: 600;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
`;