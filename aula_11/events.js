function criar_p(){
    let novoP = document.createElement('p');
    const url = 'http://localhost:3000/app';

    fetch(url)
        .then(resultado => resultado.text())
        .then(conteudo => {
            novoP.innerHTML = conteudo;
            document.body.appendChild(novoP)})
        .catch(erro => {
            novoP.innerHTML = "Ocorreu um erro: "+ erro.text();
            document.body.appendChild(novoP);
        })
}