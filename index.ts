//const message: string = "hello word";
//console.log(message)
//const idade: number[] = [18, 18, 69, 420]

//interface otario {
    //nome: string,
    //idade:number,
//}

//interface Animal{
    //nome: string;
    //idade : number
//}

//type Union = otario | Animal

//const cadastro: Union[] = [
    //{ nome: "paulindo", idade: 69},
    //{ nome: "jacinto", idade: 420}
//];
//console.log(cadastro)


//enum Color {
    //Red = "vermelho",
    //Green = "verde",
    //Blue = "azul"
//}

//let variable: any = "Hello";
//variable = 10; // Válido, pois é 'any'

//console.log(Color.Green)

function calculateBMI(weight: number, height: number): string {
    const bmi: number = weight / (height * height);
    
    if (bmi < 18.5) {
        return "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Peso normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

const weight: number = 90; // em kg
const height: number = 1.70; // em metros
const result: string = calculateBMI(weight, height);
console.log(`Seu IMC é: ${result}`);