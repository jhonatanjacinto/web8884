(() => {

    const formulario = document.querySelector('.formNovoCartao');
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        const campoTexto = formulario.querySelector('textarea');

        if (campoTexto.value.trim() === '') {
            moduloNotificacao.notificar('Por favor, preencha o campo!');
            campoTexto.focus();
        }
        else {
            // cria um cartão novo no mural
            moduloMural.adicionarCartao(campoTexto.value);
            moduloSync.sincronizar();
            campoTexto.value = '';
        }
    });

})();