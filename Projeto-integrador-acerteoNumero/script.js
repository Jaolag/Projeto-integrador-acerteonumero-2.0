window.onload = function () {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let numeroDeTentativas = 0;
    const palpite = document.getElementById('palpite');
    const botaoPalpite = document.getElementById('botao-palpite');
    const resultado = document.getElementById('resultado');

    botaoPalpite.addEventListener('click', function () {
        const chute = parseInt(palpite.value);
        numeroDeTentativas++;
        if (chute < numeroSecreto) {
            resultado.innerHTML = 'Seu palpite está abaixo do número secreto.';
        } else if (chute > numeroSecreto) {
            resultado.innerHTML = 'Seu palpite está acima do número secreto.';
        } else {
            resultado.innerHTML = `Parabéns! Você acertou em ${numeroDeTentativas} tentativas!`;
            botaoPalpite.disabled = true;
        }

        palpite.value=''
    });
}

