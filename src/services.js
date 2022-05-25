export function dobro(n){
    return n*2;
}

export function somar(n1,n2){
    return n1 +n2;
}

export function temperatura(febre){
    let resposta = false;
    if(febre>=37.5){
        resposta=true;
    }
    return resposta;
}

export function passou(n1,n2,n3){
    let total= (n1+n2+n3)/3;
    let resposta =true;    
    if(total<=5.0){
        resposta=false;
    }

    return resposta;
}

export function tabuada(numero){
    let tabu= [11];
    let a=0
    for(let i=0; i<=10; i++ ){
        tabu[i]= a;
        a= a+numero;
    }
    return tabu;
}


export function corPrima(cor){
    let resposta= false;
    if(cor=="amarelo"||cor=="azul"|| cor=="vermelho" ){
        resposta=true;
    }

    return resposta;
}

export function ingCinema(inteira,meia,diasemana,nacionalidade){
    
    let qntdInteiras= inteira*28.5;
    let qntdMeias= meia*14.25;
    let total= qntdInteiras+ qntdMeias;
    if(diasemana== "quarta-feira"){
        total= total/2;
    }
    if(nacionalidade=="brasileira"){
        qntdInteiras= inteira*5;
        qntdMeias=meia*5;
        total= qntdMeias+qntdInteiras;
    }

    return total;
}

export function freqCarac(texto, caractere){
    let qntd=0;
    for(let letra of texto){
        if(letra=caractere)
        qntd++;
    }

    return qntd
}

export function maiorNumero(numeros) {
    let maior= Number.MIN_VALUE;
    for(let item of numeros){
        if(item>maior)
        maior=item;
    }

    return maior
}