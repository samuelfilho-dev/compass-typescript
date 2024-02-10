/* 
    Declaração de tuplas no Typescript
*/
const tuple: [number, string] = [1, "admin"];

const person: {
  role: [number, string];
} = {
  role: [2, "auhor"],
};

person.role.push('admin');
// person.role[1] = 10;
