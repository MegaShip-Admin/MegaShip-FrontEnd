import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import Select from 'react-select'
import axios from "axios"

import aereo from "../assets/Mini_Aereo.svg";
import terrestre from "../assets/Mini_Terrestre.svg";
import maritimo from "../assets/Mini_Maritimo.svg";

const ListOfQuotes = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/trabajos")
      .then((response) => {
        console.log("Datos recibidos:", response.data);

        const transformedData = response.data.map(item => ({
          transporte: getTransportImage(item.medio), // Solo transformamos "medio"
          flujo: "null",
          empresa: "null",
          cliente: null,
          origen: null,
          destino: null,
          costo: null,
          fecha: null,
          empleado: null,
          estado: null,
        }));

        setRecords(transformedData);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);


    // Función para asignar la imagen según el medio de transporte
    const getTransportImage = (medio) => {
      switch (medio) {
        case 1:
          return <img src={terrestre} alt="Terrestre" />;
        case 2:
          return <img src={maritimo} alt="Maritimo" />;
        case 3:
          return <img src={aereo} alt="Aereo" />;
        default:
          return "Desconocido";
      }
    };

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

const options = [
  { value: "transporte", label: "Transporte" },
  { value: "flujo", label: "Flujo" },
  { value: "empresa", label: "Empresa" },
  { value: "cliente", label: "Cliente" },
  { value: "origen", label: "Origen" },
  { value: "destino", label: "Destino" },
  { value: "costo", label: "Costo" },
  { value: "fecha", label: "Fecha" },
  { value: "empleado", label: "Empleado" },
  { value: "estado", label: "Estado" },
];

  const handleSelectChange = (selectedOption) => {
    // Actualiza el estado de filterColumn con el valor de la columna seleccionada
    setFilterColumn(selectedOption.value);  // Suponiendo que 'value' es el valor que contiene el nombre de la columna
  };

  const [records1, setRecords1] = useState(data);
  
  const [filterColumn, setFilterColumn] = useState("transporte"); // Columna por defecto

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase(); // Lo que escribe el usuario

    const filteredRecords = data.filter(record => {
      const field = record[filterColumn];
      // Verifica si es un string, de lo contrario devuelve su representación
      return typeof field === 'string'
        ? field.toLowerCase().includes(value)
        : String(field.props?.alt).toLowerCase().includes(value); // Maneja las imágenes
    });
    
    setRecords1(filteredRecords);
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
          <StyledReactSelect
            options = {options}
            onChange={handleSelectChange} // Muestra en consola los selects
            defaultValue={ options[0] }
          />
        </FilterContainer>

        <ListContainer>
          <StyledDataTable
            columns={columns}
            data={records}
            selectableRows
            // selectableRowsNoSelectAll
            selectableRowsSingle
            selectableRowsComponent={CustomCheckbox}
            fixedHeader
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
  /* border: 3px solid red; */
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
  
  border-radius: 20px;
  /* overflow-y: auto */
`;


//Contenedor de Barra de Busqueda y Filtro
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Menor espacio entre los botones */
  margin-top: -12px; // Revistar !!! <--------
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


//Botones
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Menor espacio entre los botones */
  /* margin-top: 20px; */
`;

const BotonDuplicar = styled.button`
  width: 125px;
  height: 34px;
  font-size: 14px;
  border: 2px solid #724d93;
  background-color: #ffffff;
  color: #724d93;
  border-radius: 30px;
  cursor: pointer;
  margin: 0px;

  &:focus {
    border-color: #724d93;
    outline: none;
  }

  &:hover {
    background-color: #ffffff;
  }
`;

const BotonEditar = styled(BotonDuplicar)`
`;


// Data_Table_CSS
const StyledDataTable = styled(DataTable)`
  .rdt_Table {
    min-width: 80vw;
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
      padding-left: 25px; // Padding iconos
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

  .rdt_TableBody {
    max-height: 432px; //Tamaño de tabla exacto
    overflow-y: auto;
    padding-left: 3px;
    border: 2px solid #724d93;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    &::-webkit-scrollbar {
      width: 20px;
    }
    &::-webkit-scrollbar-track {
      background: #fafbfa9e;
      border-radius: 20px;
      margin: 5px 0; //Controla separacion de arriba y abajo
    }
    &::-webkit-scrollbar-thumb {
      background-color: #724d93;
      border-radius: 10px;
      border: 6px solid #ffffff;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #5b376d; 
    }
  }

/* Ajustar padding en los títulos de las columnas */
.rdt_TableHeadRow .rdt_TableCol:nth-child(11) {
  padding-right: 28px;
  
}
.rdt_TableHeadRow .rdt_TableCol:nth-child(2) {
  padding-left: 20px;
  
}

`;


// Select (react-select)
const StyledReactSelect = styled(Select).attrs({
  classNamePrefix: 'custom-select',
})`
  font-size: 16px;
  z-index: 1000;

  .custom-select__control {
    width: 225px;
    height: 46px;
    font-size: 16px;
    padding-left: 10px;
    border: 2px solid #724D93;
    border-radius: 30px;
    box-shadow: none;
    outline: none;

    &:hover {
      border-color: #724D93;
    }
  }

  .custom-select__single-value {
    color: #646464;
  }

  .custom-select__option {
    background-color: #ffffff; //<---
    color: #646464;
    &:hover {
      background-color: #bebdbf;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-radius: 15px 15px 0 0;
    }
    &:last-child {
      border-radius: 0 0 15px 15px;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #BEBDBF;
    }
    &:active {
      background-color: #fbfafa;
    }
  }

  .custom-select__menu {
    height: 100 px; /* Altura máxima del menú */
    width: 225px;
    /* border: 2px solid #724D93; */
    /* background-color: #a51515; */
    border-radius: 30px;
    
    overflow: visible; /* Asegura que las opciones no se recorten */
  }

  .custom-select__menu-list {
    max-height: 500px; /* Ajusta la altura de la lista interna */
    overflow-y: visible; /* Elimina el scroll interno */
    padding: 0px;
  }

  .custom-select__indicator {
    color: #fbfafa;
    background-color: #724D93;
    border-radius: 50%;
    margin-right: 4px;
  }

  .custom-select__indicator:hover {
    color: #fbfafa;
    background-color: #724D93;
  }

  .custom-select__indicator-separator {
    display: none;
  }
`;

const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 5px;
  height: 5px;
  border: 2px solid #BEBDBF;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
  padding: 6px;

  &:checked {
    background-color: #646464; /* Verde cuando está seleccionado */
    border-color: #646464;
  }
`;
