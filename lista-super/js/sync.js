const moduloSync = (function() {

    'use strict';

    // INSTRUÇÃO 1

    const user = 'COLOQUE_SEU_EMAIL_AQUI';
    const url = 'https://caelum.jhonatanjacinto.dev/wd47/api/sync.php';
    
    const getItens = async () => {
        const res = await fetch(`${url}?acao=get-itens&user=${user}`);
        const json = await res.json();
        if (json.status == 1) {
            // INSTRUÇÃO 2
            // INSTRUÇÃO 3
        }
    }

    const sync = async () => {
        // INSTRUÇÃO 4
        // INSTRUÇÃO 5
        let params = `acao=salvar-itens&itens=${JSON.stringify(linhas)}&user=${user}`;

        const configReq = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/x-www-form-urlencoded',
            },
            body: params,
        }

        const res = await fetch(url, configReq);
        const json = await res.json();
        // INSTRUÇÃO 6
        // INSTRUÇÃO 7
    };


    // getItens(); // INSTRUÇÃO 8

    return {
        sincronizar : sync
    }

})();