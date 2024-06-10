export const buscarImagensGato = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=5`;
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados.slice(0, 5).map((imagem: any) => imagem.url);
  } catch (erro) {
    console.error(erro);
    return [];
  }
};
