/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

 const args = process.argv.slice(-1);
 console.log(`Running question #1 with args ${args}`);

 var forms = calcularFormasDiferentes(args);

 console.log(`para n = ${args} la escalera se puede subir de ${forms} formas diferentes`);

 function calcularFormasDiferentes(arg) {

    let result;
    let nA = 0;
    let nB = 1;

    if(arg == 0 )
        return 0;

    if(arg == 1)
        return 1;


    for (let i = 2; i <= arg; i++) {
        result = nA+nB
        nA = nB; 
        nB = result; 
    }

    return result;

 }
