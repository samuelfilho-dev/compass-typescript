// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // 1ª Forma
const userInputElement = document.getElementById('user-input') as HTMLInputElement; // 2ª Forma

if (userInputElement) {
    userInputElement.value = 'Hi there';
}