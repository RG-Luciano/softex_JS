function calculadora(){
    const e = require('prompt-sync')();
    var n1 = Number(e("Digite um número: "))
    var n2 = Number(e("Digite outro número: "))
    var op = e("digite o operador: ")
    var res = Number
    
    const somar = (n1,n2)=>{
        res = n1+n2
        return(res)
    }
    const dividir = (n1,n2) => {
        res= n1 / n2
        return(res)
    }
    function subtrair(n1,n2){
        res= n1 - n2
        return(res)
    }
    function mutiplicar(n1,n2){
        res = n1*n2
        return(res)
    }

    if(op =="+"){
        somar(n1,n2)
    }else if(op == "-"){
        subtrair(n1,n2)
    }else if(op =="*"){
        mutiplicar(n1,n2)
    }else if(op =="/"){
        dividir(n1,n2)
    }
        
    
    console.log(res)
    }
calculadora()