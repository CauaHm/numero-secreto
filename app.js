alert('Boas vindas ao número secreto!');

let numSecret = 4;
console.log(`O número secreto é ${numSecret}`);
let chute;
let tentativas = 1;

console.log(`O número chutado é ${chute}`);

// Enquanto o chute não for igual ao número secreto 
while (chute != numSecret) {
     chute = prompt('Escolha um número entre 0 e 10');

    // Se o chute for igual ao número secreto
    if (chute == numSecret) {
        alert(`Isso ae! você descobriu o número secreto ${numSecret}`);
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
if (tentativas > 1) {
    alert(`Você acertou o número secreto com ${tentativas} tentativas`)
} else {
    alert(`Você acertou o número secreto com ${tentativas} tentativa`)
}
