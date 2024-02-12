// Decorator - Uma função que se aplica em classe
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger // Aplicando um Decorator
class Person {
    name = 'Max';

    constructor() {
        console.log('Create Person Object...')
    }
}

const pers = new Person();
console.log(pers);