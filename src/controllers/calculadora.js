const servicoCalculadora = require("../services/calculadora")

const servico = new servicoCalculadora()

class controllerCalculadora {
    operacaoSomar(req, res){
        try {
            const resultado = servico.operacaoSomar(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({
                message: resultado
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }

    operacaoDiminuir(req, res){
        try {
            const resultado = servico.operacaoDiminuir(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({
                message: resultado
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }

    operacaoMultiplicar(req, res){
        try {
            const resultado = servico.operacaoMultiplicar(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({
                message: resultado
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }

    operacaoDividir(req, res){
        try {
            const resultado = servico.operacaoDividir(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({
                message: resultado
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }


    operacaoPotencia(req, res){
        try {
            const resultado = servico.operacaoPotencia(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({
                message: resultado
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }

    operacaoRaiz(req, res){
        try {
            const resultado = servico.operacaoRaiz(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({
                message: resultado
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = controllerCalculadora