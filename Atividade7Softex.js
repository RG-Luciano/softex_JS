const e = require('prompt-sync')();
function Banco(conta,saldo,tipo,agencia){
    this.conta = conta
    this.saldo = saldo
    this.tipo = tipo
    this.agencia = agencia
}

function buscarsaldo(){
    console.log("Seu saudo é: "+minhaconta.saldo)
}
function deposito(dep){
    minhaconta.saldo += dep

}
function saque(saq){
    minhaconta.saldo -= saq

}
function nconta(){
    console.log("Número da sua conta é: "+minhaconta.conta)

}
var minhaconta = new Banco("1010",5000,"corrente","0001")


var menu = 5
while(menu !=0){
    console.log("[1] para buscar saldo\n[2] para deposito\n[3] para saque\n[4] para número da conta\n[0] para sair.")
    menu = e()
    if(menu ==1){
        buscarsaldo()
    }else if(menu == 2){
        deposito(Number(e("digite o quento vai depositar: ")))
    }else if(menu == 3){
        var s = Number(e("digite quanto vai sacar: "))
        if(s>minhaconta.saldo){
            console.log("Não tem saldo suficiente.")
        }else{
            saque(s)
        }
    }else if(menu == 4){
        nconta()
    }else if (menu == 0){
        console.log("saindo")
        break
    }else{
        console.log("essa opção não existe")
    }
}