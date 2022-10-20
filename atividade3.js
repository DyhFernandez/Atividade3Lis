/*<!-- Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor 
da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. 
O valor deve ser passado para o programa que deverá retornar o valor da venda.-->*/


    var valor = 60;

    if (valor < 20) {
        valor = ((valor * 45)/100) + valor;
       console.log(`Você teve um lucro de ${valor}` );
    } else {
        valor = ((valor * 30)/100) + valor;
        console.log (`Você teve um lucro de ${valor} `);
    }


