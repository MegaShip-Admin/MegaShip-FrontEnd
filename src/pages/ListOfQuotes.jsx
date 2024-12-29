import { useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

import aereo from "../assets/Mini_Aereo.svg";
import terrestre from "../assets/Mini_Terrestre.svg";
import maritimo from "../assets/Mini_Maritimo.svg";

const ListOfQuotes = () => {
  const columns = [
    { name: "Transporte", selector: row => row.transporte.props.alt, cell: row => row.transporte, sortable: true },
    { name: "Flujo", selector: row => row.flujo, sortable: true },
    { name: "Empresa", selector: row => row.empresa, sortable: true },
    { name: "Cliente", selector: row => row.cliente, sortable: true },
    { name: "Origen", selector: row => row.origen, sortable: true },
    { name: "Destino", selector: row => row.destino, sortable: true },
    { name: "Costo", selector: row => row.costo, sortable: true },
    { name: "Fecha", selector: row => row.fecha, sortable: true },
    { name: "Empleado", selector: row => row.empleado, sortable: true },
    { name: "Estado", selector: row => row.estado, sortable: true },
  ];

  const data = [
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Importación', empresa: 'Empresa D', cliente: 'Cliente 04', origen: 'China', destino: 'Uruguay', costo: '$250', fecha: '04/12/2024', empleado: 'Juan', estado: 'Pendiente' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa E', cliente: 'Cliente 5', origen: 'Estados Unidos', destino: 'Uruguay', costo: '$400', fecha: '05/12/2024', empleado: 'Ana', estado: 'Pendiente' },
    { transporte: <img src={terrestre} alt="Terrestre" />, flujo: 'Importación', empresa: 'Empresa F', cliente: 'Cliente 6', origen: 'Argentina', destino: 'Uruguay', costo: '$150', fecha: '06/12/2024', empleado: 'Carlos', estado: 'Sin terminar' },
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Importación', empresa: 'Empresa G', cliente: 'Cliente 7', origen: 'España', destino: 'Uruguay', costo: '$350', fecha: '07/12/2024', empleado: 'Laura', estado: 'Pendiente' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa H', cliente: 'Cliente 8', origen: 'China', destino: 'Uruguay', costo: '$500', fecha: '08/12/2024', empleado: 'Juan', estado: 'Sin terminar' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa I', cliente: 'Cliente 9', origen: 'Brasil', destino: 'Uruguay', costo: '$200', fecha: '09/12/2024', empleado: 'Ana', estado: 'Pendiente' },
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Importación', empresa: 'Empresa J', cliente: 'Cliente 10', origen: 'China', destino: 'Uruguay', costo: '$300', fecha: '10/12/2024', empleado: 'Carlos', estado: 'Pendiente' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Importación', empresa: 'Empresa K', cliente: 'Cliente 11', origen: 'Alemania', destino: 'Uruguay', costo: '$450', fecha: '11/12/2024', empleado: 'Laura', estado: 'Sin terminar' },
    { transporte: <img src={maritimo} alt="Maritimo" />, flujo: 'Exportación', empresa: 'Empresa A', cliente: 'Cliente 01', origen: 'Uruguay', destino: 'China', costo: '$100', fecha: '01/12/2024', empleado: 'Juan', estado: 'Sin terminar' },
    { transporte: <img src={aereo} alt="Aereo" />, flujo: 'Exportación', empresa: 'Empresa L', cliente: 'Cliente 12', origen: 'Uruguay', destino: 'Estados Unidos', costo: '$600', fecha: '12/12/2024', empleado: 'Ana', estado: 'Pendiente' }
];



  const [records, setRecords] = useState(data);
  const [filterColumn, setFilterColumn] = useState("transporte"); // Columna por defecto

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase(); // Lo que escribe el usuario
    const filteredRecords = data.filter(record => 
      record[filterColumn].toLowerCase().includes(value) // Filtra por la columna seleccionada
    );
    setRecords(filteredRecords);
  };

  return (
    <Container>
      <InternalContainer>
        <FilterContainer>
          <InputFiler
              type="text" 
              placeholder={`Buscar por ${filterColumn}...`} 
              onChange={handleChange} 
            />
            
            {/* Selector de columna */}
            <FiletSelect onChange={(e) => setFilterColumn(e.target.value)}>
              <option value="transporte">Transporte</option>
              <option value="flujo">Flujo</option>
              <option value="empresa">Empresa</option>
              <option value="cliente">Clientre</option>
              <option value="origen">Origen</option>
              <option value="destino">Destino</option>
              <option value="costo">Costo</option>
              <option value="fecha">Fecha</option>
              <option value="empleado">Empleado</option>
              <option value="estado">Estado</option>
            </FiletSelect>

        </FilterContainer>

        <ListContainer>
          <StyledDataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            fixedHeaderScrollHeight="500px"
            onSelectedRowsChange={(data) => console.log(data)}
          />
        </ListContainer>
        <ButtonContainer>
          <BotonDuplicar onClick={() => console.log("Botón 'Duplicar' clickeado")}> Duplicar</BotonDuplicar>
          <BotonEditar onClick={() => console.log("Botón 'Editar' clickeado")}>Editar</BotonEditar>
        </ButtonContainer>
      </InternalContainer>
    </Container>
  ); 
};

export default ListOfQuotes;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  border: 3px solid red;
`;

const InternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Mueve los elementos a la derecha */
  height: 80vh;
  gap: 20px;
  /* border: 2px solid blue; */
`;


const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #724d93;
  border-radius: 20px;
  /* overflow-y: auto */
`;


//Contenedor de Barra de Busqueda y Filtro
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Menor espacio entre los botones */
  margin-top: 20px;
`

// Barra de busqueda
const InputFiler = styled.input`
  width: 200px;
  height: 40px;
  font-size: 16px;
  padding-left: 20px; // Controla la separación del texto y borde
  border: 2px solid #724d93;
  color: #646464;
  border-radius: 30px;

  &:focus {
    border-color: #724d93;
    outline: none;
  }
`

//Selector de filtor
const FiletSelect = styled(InputFiler).attrs({ as: 'select' })`
  width: 225px;
  height: 46px;
  cursor: pointer;
`

//Botones
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Menor espacio entre los botones */
  margin-top: 20px;
`;

const BotonDuplicar = styled.button`
  width: 125px;
  height: 34px; /* Mitad de la altura de FiletSelect */
  font-size: 14px; /* Ajusta el tamaño de fuente proporcionalmente */
  border: 2px solid #724d93;
  background-color: #ffffff;
  color: #724d93;
  border-radius: 30px;
  cursor: pointer;
  margin: 0px; /* Mismo margen */

  &:focus {
    border-color: #724d93;
    outline: none;
  }

  &:hover {
    background-color: #c71313; /* Un efecto hover */
  }
`;

const BotonEditar = styled(BotonDuplicar)`
`;


// Data_Table_CSS
const StyledDataTable = styled(DataTable)`
  .rdt_Table {
    min-width: 75vw;
    box-sizing: border-box;
  }
  .rdt_TableRow {
    margin: 0;
    background-color: #fafbfa9e !important;
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
