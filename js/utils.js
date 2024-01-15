// Validação se o que foi digitado é numero
export function notNumber(value) {
    return isNaN(value)  || value == ""
}

//Função IMC
export function IMC(peso, altura) {
    return (peso / ((altura / 100) ** 2)).toFixed(2)
}