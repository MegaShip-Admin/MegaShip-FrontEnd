export const isRequired = (value, fieldName) => {
  if (value === null || value === "") {
    return `${fieldName} es obligatorio`;
  }
  return true;
};

export const isEmail = (value, fieldName) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return `${fieldName} tiene un formato de correo electrónico inválido`;
  }
  return true;
};

export const isNumber = (value, fieldName) => {
  if (isNaN(value)) {
    return `${fieldName} debe ser un número`;
  }
  return true;
};

export const isString = (value, fieldName) => {
  if (typeof value !== "string") {
    return `${fieldName} debe ser texto`;
  }
  return true;
};

export const isDate = (value, fieldName) => {
  if (isNaN(Date.parse(value))) {
    return `${fieldName} tiene un formato de fecha inválido`;
  }
  return true;
};