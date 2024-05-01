
async function buscaEndereco(cep) {

    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resposta = await consultaCep.json();
        if (resposta.erro) {
            throw Error('CEP não existente!');
        }
        const logradouro = document.getElementById('endereco');
        const cidade = document.getElementById('cidade');
        const estado = document.getElementById('estado');
        const bairro = document.getElementById('bairro');

        cidade.value = resposta.localidade;
        estado.value = resposta.uf;
        logradouro.value = resposta.logradouro;
        bairro.value = resposta.bairro;
        
        console.log(resposta);
        return resposta;
    } catch (erro) {
        mensagemErro.innerHTML = `<p class="erro">CEP inválido, Digite um CEP válido!</p>`;
        console.log(erro);
    }
};

const cepInput = document.getElementById('cep');
cepInput.addEventListener('focusout', () => buscaEndereco(cep.value));

