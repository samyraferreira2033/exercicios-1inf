const cliente = "Sabrina Neves" 
const opçaodocardapio = 4
const quantidade = 4 
const formadepagamento = "pix" 
 const statusdopedido = "aprovado"

 let pedido

 switch (opcaodocardapio) {
     case 1:
    pedido = "pastel de carne"
      break

 case 2:
 pedido = "pastel de queijo"
        break

  case 3:
    pedido = "caldo de cana"
  break

    case 4:
   pedido = "coxinha"
 break

  default:
     pedido = "opção invalida"                                                                              }
 // RF03 - preço 
   let preço 
   switch (opcaodocardapio) {
 case 1: 
    preco = 9 
    break 
case 2: 
    preco = 6
 case 4:
    preco = 7 
    break 
    default: 
    preco = 0 
   } 
// RF04 - subtotal
let subtotal = preco * quantidade 

// RF05 - frete
let frete 

if (subtotal >= 40) {
    frete = 0 
} else { 
     frete = 8 
} 
// RF06 - forma de pagamento 
 let mensagemPagamento
   switch (formaPagamentl) { 
    case " pix ": 
     mensagemPagamento = "pagamento via PIX" 
       break 

       case "cartao": 
        mensagemPagamento = "pagamento via cartão"
         break 

         case "dinheiro":
            mensagemPagamento = "pagamento em dinheiro"
             break 
     default: 
    mensagemPagamento = "forma de pagamento inválida"
   } 
// RF07 - Desconto 
    let percentual
if (formadepagamento == "pix" || formadepagamento == "cartao") {
      percentual = 5 
} else { 
       percentual = 0 
} 
  let desconto = subtotal * percentual / 100

// RF08 - Situação do pedido
     let mensagemStatus 
        switch (statusdopedido) { 
             case "pendente": 
                 mansagemstaus = " pedido em preparo"       
                break 
            case "aprovado": 
                  mensagemStatus = "pedido a caminho"
                 break 
           case "enviado":  
             mensagemstatus = "pedido a caminho"
               break 
        case "cancelado":
              mensgemstatus = "pedido cancelado"
                 break 
            default: 
                 mensagemstatus = " status desconhecido "

    let resumo = `
    Cliente: ${cliente}
    Item: ${pedido}
    Quantidade: ${quantidade}
    Subtotal: R$ ${subtotal}
    Frete: R$ ${frete}
    Desconto: R$ ${desconto}
    Total: R$ ${total}
         ${mensagemStatus}
    ` 
module.exports = {
        cliente,
            opcaodocardapio,
                quantidade,
                    formadepagamento,
                        statusdopedido,
                            pedido,
                                precoUnitario,
                                    percentual,
                                        desconto,
                                            total,
                                                mensagemPagamento,
                                                    mensagemStatus,
                                                        resumo
                                                        }
}
