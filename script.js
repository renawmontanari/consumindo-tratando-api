
async function buscaEndereco() {
    const consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/');
    const resposta = await consultaCep.json();
    console.log(resposta)
}

buscaEndereco();