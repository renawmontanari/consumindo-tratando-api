
async function buscaEndereco(cep) {

    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resposta = await consultaCep.json();
        if (resposta.erro) {
            throw Error('CEP não existente!');
        }
        console.log(resposta);
        return resposta;
    } catch (erro) {
        console.log(erro);
    }
    
};