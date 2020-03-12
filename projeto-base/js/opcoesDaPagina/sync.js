const moduloSync = (() => {

        const btn = document.querySelector('#btnSync');
        btn.onclick = async () => {
            btn.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
            const infoUsuario = {
                usuario: 'jhonatan.jacinto@caelum.com.br',
                cartoes: moduloMural.getCartoes()
            }
            console.log(infoUsuario);

            let url = 'https://ceep.herokuapp.com/cartoes/salvar';
            const configuracaoFetch = {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(infoUsuario)
            }

            try {
                const resposta = await fetch(url, configuracaoFetch);
                const dadosServidor = await resposta.json();
                console.log(dadosServidor);
                let msg = `${dadosServidor.quantidade} cartão(ões) salvo(s) para ${dadosServidor.usuario}`;
                moduloNotificacao.notificar(msg);
                btn.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
            }
            catch(erro) {
                moduloNotificacao.notificar('Erro ao salvar os cartões no servidor!');
                console.error(erro);
            }
        }

        return {
            sincronizar: function() {
                btn.click();
            }
        }

})();