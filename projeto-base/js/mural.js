const moduloMural = (function() {

    const mural = document.querySelector('.mural');
    const templateCartao = document.querySelector('#template-cartao').innerHTML;

    // Exclusão de Cartões
    mural.addEventListener('click', event => {
        if (event.target.classList.contains('opcoesDoCartao-remove')) {
            // se tem a classe, então é o botão de remoção
            const cartao = event.target.parentElement.parentElement;
            cartao.classList.add('cartao--some');
            cartao.addEventListener('transitionend', () => cartao.remove());
        }
    });

    // Mudança da cor do cartão
    mural.addEventListener('change', event => {
        const cartao = event.target.parentElement.parentElement;
        cartao.style.backgroundColor = event.target.value;
    });

    // Mudança de cor do cartão via teclado
    mural.addEventListener('keyup', event => {
        let isLabel = event.target.classList.contains('opcoesDoCartao-tipo');
        if (isLabel && (event.key === ' ' || event.key === 'Enter')) {
            // dá um clique no label atual que ativa o evento change
            // que muda a cor do cartão 
            event.target.click();
        }
    });

    /**
     * Muda o layout do Mural exibindo os cartões como BLOCOS ou em LINHAS
     * @returns {void}
     */
    function mudarLayout()
    {
        mural.classList.toggle('mural--linha');
    }

    /**
     * Função que cria cartões no Mural
     * @param {string} conteudo Conteúdo que será adicionado no Cartão
     * @returns {void}
     */
    let numeroCartao = 0;
    function adicionarCartao(conteudo)
    {
        numeroCartao++;
        const cartao = document.createElement('article');
        cartao.classList.add('cartao');
        cartao.tabIndex = 0;
        cartao.innerHTML = templateCartao.replace('{{CONTEUDO_CARTAO}}', conteudo).replace(/{{NUMERO_CARTAO}}/g, numeroCartao);
        mural.append(cartao);
    }

    // retornar um objeto com tudo o que 
    // deve ser público (acessível) deste módulo em questão
    return {
        mudarLayout,
        adicionarCartao
    }

})();