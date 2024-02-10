// ...numbers: Parametro de Resto da Função 'add'
const add = (...numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0);
  };
  
  const addedNumbers = add(5, 10, 2, 3.7, 40);
  console.log(addedNumbers);
