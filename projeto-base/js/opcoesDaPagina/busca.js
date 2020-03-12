(() => {

    $('#busca').on('input', function() {
        let termo = $(this).val().trim();
        if (termo != '') {
            // filtrar os cartões que batem com o termo digitado
            $('.cartao').hide().filter(function() {
                return $(this).find('.cartao-conteudo').text().match(new RegExp(termo, 'i'));
            }).show();
        }
        else {
            // mostrar todos os cartões novamente
            $('.cartao').show();
        }
    });

})();