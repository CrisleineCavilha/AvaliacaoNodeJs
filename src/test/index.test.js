const { describe, expect, it } = require('@jest/globals')
const servicoCalculadora = require("../services/calculadora")

describe('Testes das operações da Calculadora', () => {
   
   const servico = new servicoCalculadora()

   it('Operacão Somar', () => {
      const result = servico.operacaoSomar("+", 10, 5)
      
      expect(result).toBe('Número1: 10, Número2: 5, Operação informada: + .Resultado: 15');
   })

   it('Should error', () => {
      const result = () => servico.operacaoSomar(1, "a", "a")    
      
      expect(result).toThrowError("Favor informar símbolos da operação e números inteiros.")
   })
})


describe('Testes das operações da Calculadora', () => {
   
   const servico = new servicoCalculadora()

   it('Operacão Diminuir', () => {
      const result = servico.operacaoDiminuir("-", 10, 5)
      
      expect(result).toBe('Número1: 10, Número2: 5, Operação informada: - .Resultado: 5');
   })

   it('Should error', () => {
      const result = () => servico.operacaoSomar(1, "a", "a")    
      
      expect(result).toThrowError("Favor informar símbolos da operação e números inteiros.")
   })
})


describe('Testes das operações da Calculadora', () => {
   
   const servico = new servicoCalculadora()

   it('Operacão Multiplicar', () => {
      const result = servico.operacaoMultiplicar("*", 10, 5)
      
      expect(result).toBe('Número1: 10, Número2: 5, Operação informada: * .Resultado: 50');
   })

   it('Should error', () => {
      const result = () => servico.operacaoMultiplicar(1, "a", "a")    
      
      expect(result).toThrowError("Favor informar símbolos da operação e números inteiros.")
   })
})


describe('Testes das operações da Calculadora', () => {
   
   const servico = new servicoCalculadora()

   it('Operacão Dividir', () => {
      const result = servico.operacaoDividir("/", 10, 5)
      
      expect(result).toBe('Número1: 10, Número2: 5, Operação informada: / .Resultado: 2');
   })

   it('Should error', () => {
      const result = () => servico.operacaoDividir(1, "a", "a")    
      
      expect(result).toThrowError("Favor informar símbolos da operação e números inteiros.")
   })
})


describe('Testes das operações da Calculadora', () => {
   
   const servico = new servicoCalculadora()

   it('Operacão Dividir', () => {
      const result = servico.operacaoPotencia("^", 2, 3)
      
      expect(result).toBe('Número1: 2, Número2: 3, Operação informada: ^ .Resultado: 8');
   })

   it('Should error', () => {
      const result = () => servico.operacaoPotencia(1, "a", "a")    
      
      expect(result).toThrowError("Favor informar símbolos da operação e números inteiros.")
   })
})


describe('Testes das operações da Calculadora', () => {
   
   const servico = new servicoCalculadora()

   it('Operacão Raiz', () => {
      const result = servico.operacaoRaiz("r", 25, 16)
      
      expect(result).toBe('Número1: 25, Número2: 16, Operação informada: r .Resultado: 5 e 4');
   })

   it('Should error', () => {
      const result = () => servico.operacaoRaiz(1, "a", "a")    
      
      expect(result).toThrowError("Favor informar símbolos da operação e números inteiros.")
   })
})
