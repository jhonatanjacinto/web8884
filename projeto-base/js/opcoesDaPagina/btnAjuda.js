(function() {

    const btn = document.querySelector('#btnAjuda');
    btn.addEventListener('click', () => {
        const ajudas = [
            'Bem-vindo(a) ao CEEP!',
            'Clique no botão "Linhas" para mudar o layout!'
        ];
        ajudas.forEach(ajuda => alert(ajuda));
    });

})();
