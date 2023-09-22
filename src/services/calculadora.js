class servicoCalculadora {
    operacaoSomar(operacao, num1, num2) {
        if((typeof operacao != "string") || isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar símbolos da operação e números inteiros.")
        }

        let resultado = 0
        if(operacao == '+') {
            resultado = num1 + num2
        }
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    }

    operacaoDiminuir(operacao, num1, num2) {
        if((typeof operacao != "string") || isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar símbolos da operação e números inteiros.")
        }

        let resultado = 0
        if(operacao == '-') {
            resultado = num1 - num2
        }
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    }

    operacaoMultiplicar(operacao, num1, num2) {
        if((typeof operacao != "string") || isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar símbolos da operação e números inteiros.")
        }

        let resultado = 0
        if(operacao == "*") {
            resultado = num1 * num2
        }
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    }

    operacaoDividir(operacao, num1, num2) {
        if((typeof operacao != "string") || isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar símbolos da operação e números inteiros.")
        }

        let resultado = 0
        if(operacao == '/') {
            resultado = num1 / num2
        }
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    } 

    operacaoPotencia(operacao, num1, num2) {
        if((typeof operacao != "string") || isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar símbolos da operação e números inteiros.")
        }

        let resultado = 0
        if(operacao == '^') {
            resultado = Math.pow(num1, num2)
        }
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado}`);
    } 

    operacaoRaiz(operacao, num1, num2) {
        if((typeof operacao != "string") || isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar símbolos da operação e números inteiros.")
        }

        let resultado1 = 0
        let resultado2 = 0
        if(operacao == 'r') {
            resultado1 = Math.sqrt(num1)
            resultado2 = Math.sqrt(num2)

        }
        return(`Número1: ${num1}, Número2: ${num2}, Operação informada: ${operacao} .Resultado: ${resultado1} e ${resultado2}`);
    } 


}
  


module.exports = servicoCalculadora