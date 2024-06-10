export const buscarImagemGato = async () => {
    const url = `https://api.thecatapi.com/v1/images/search`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados[0].url;
};