// api.js
export async function GetVendedores() {
    const response = await fetch('http://localhost:3000/vendedor', {
      method: 'GET', // Especificar el método GET
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }
  
  