function validaArray (array, num) { //Cria uma função que recebe um Array e um numero.

    try {
        if (!array && !num) throw new ReferenceError("Envie os Parâmetros");//Se parâmetros não forem enviados, lance erro do tipo ReferenceError
    
        if (typeof array !== 'object') throw new TypeError ("Array precisa ser do tipo OBJECT");//Se array não for do tipo object, lance um erro tipo TypeError
        
        if (typeof num !== 'number') throw new TypeError ("Num precisa ser do tipo NUMBER");//Se número não for do tipo number, lance um erro tipo TypeError
    
        if (array.lenght !== num) throw new RangeError ("Tamanho Inválido");//Se tamanho do array for diferente do número enviado no parâmetro, lance um erro tipo RangeError

        return array; //Se caso array for válido retorna ele mesmo.
    }
    catch (e){// Será filtrado os tipos de erros utilizando o operador instanceof
        
        if (e instanceof ReferenceError){ //Se erro for ReferenceError
            console.log("Este erro é um ReferenceError");// Escreve erro ReferenceError
            console.log(e.message);// Escreve mensagem do erro
            //console.log(e.name);//Escreve nome do erro
            //console.log(e.stack);//Escreve a fila que está o erro

        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
            //console.log(e.name);
            //console.log(e.stack);
        
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
            //console.log(e.name);
            //console.log(e.stack);

        } else {
            console.log('Tipo de erro não encontrado' + e);   // Escreve erro não encontrado, concatenado ao e
        }

    }
    
}

console.log(validaArray());//Chama função para teste de válidação Error vazio
console.log(validaArray(5, 5));//Chama função TypeError
console.log(validaArray([], 'a'));//Chama função TypeError Number
console.log(validaArray([], 5));//Chama função RangerError
//console.log(validaArray([ 1, 2, 3, 4 ], 4));// Mostra função válida do Array