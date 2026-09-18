const nome = "Samyra Ferreira"
const idade = 34
const cargo = "participante"
const possuiInscricao = true
const bloqueado = false
const valorInscricao = 300
const valorPago = 350



let idadeStatus

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}




let nivelAcesso

if (cargo === "palestrante" || cargo === "organizador") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}




let acessoStatus

if (idade >= 18 && possuiInscricao && !bloqueado) {
    acessoStatus = "Credenciamento liberado"
} else {
    acessoStatus = "Credenciamento negado"
}



let pagamentoStatus
if (valorPago >= valorInscricao) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}



let troco

if (pagamentoStatus === "Pagamento aprovado") {
    troco = valorPago - valorInscricao
} else {
    troco = 0
}


let statusCongresso

if (acessoStatus === "Credenciamento liberado" && pagamentoStatus === "Pagamento aprovado") {
    statusCongresso = "Check-in do congresso confirmado"
} else {
    statusCongresso = "Check-in do congresso não confirmado"
}


const resumo = `
Nome: ${nome}
Cargo: ${cargo}
Nível de acesso: ${nivelAcesso}
Valor da inscrição: R$ ${valorInscricao}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusCongresso}
`;




module.exports = {
    nome,
    idade,
    cargo,
    possuiInscricao,
    bloqueado,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusCongresso,
    resumo
}


