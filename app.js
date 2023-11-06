alert('Boas vindas ao número secreto!');

let numSecret = parseInt(Math.random() *100 + 1);
console.log(`O número secreto é ${numSecret}`);
let chute;
let tentativas = 1;

console.log(`O número chutado é ${chute}`);

// Enquanto o chute não for igual ao número secreto 
while (chute != numSecret) {
    chute = prompt('Escolha um número entre 0 e 100');

    // Se o chute for igual ao número secreto
    if (chute == numSecret) {
        break;
    } else {
        if (chute > numSecret) {
            alert(`O número secreto é menor do que o ${chute}`);
        } else {
            alert(`O número secreto é maior do que o ${chute}`);
        }

        // tentativas = tentativas + 1;
        tentativas++;
    }
}


// palavraTentativa = tentativa é maior do que 1? se sim recebe 'tentativas' se nao 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ae! Você descobriu o número secreto ${numSecret} com ${tentativas} ${palavraTentativa}`)


// if (tentativas > 1) {
//     alert(`Isso ae! você acertou o número secreto com ${tentativas} tentativas`)
// } else {
//     alert(`Isso ae! você acertou o número secreto com ${tentativas} tentativa`)
// }
