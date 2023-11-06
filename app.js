alert('Bem vindo ao jogo do número secreto!')

let maxNum = 1000;
let secretNumber = parseInt(Math.random() *maxNum + 1);
console.log(secretNumber);
let chute;
let tentativas = 0;

while (chute != secretNumber) {
    chute = prompt(`Digite um número de 1 a ${maxNum}`)
    if (chute > secretNumber) {
        alert(`O número secreto é menor que o ${chute}`)
    } else {
        if (chute < secretNumber) {
            alert(`O número secreto é maior que o ${chute}`)
        }
        tentativas++
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ae! Você acertou o número secreto ${secretNumber} com ${tentativas} ${palavraTentativas}`)