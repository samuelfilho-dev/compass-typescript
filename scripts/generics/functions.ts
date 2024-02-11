// T e U -> Gerenricos da função
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Tipando o genericos da função
// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Max", hobbies: ["Sports"] },
//   { age: 30 }
// );

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

// 2ª Exemplo
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptonText = "Got no Value.";
  if (element.length === 1) {
    descriptonText = "Got 1 element";
  } else if (element.length > 1) {
    descriptonText = `Got ${element.length} elements.`;
  }

  return [element, descriptonText];
}

console.log(countAndDescribe([]));

// 3ª Exemplo
function extractAndConvert<T extends object, U extends keyof T>( // keyof - Vincula o tipo apenas para chaves do objeto de 'T'
  obj: T,
  key: U
) {
  return "Value" + obj[key];
}

extractAndConvert({ name: "Max" }, "name");
