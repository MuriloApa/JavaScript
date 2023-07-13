function create_p (){
    let pResultado = document.createElement('p');
    const url = 'http://localhost:3000/teste';
    fetch(url)
        .then(resultado => {
            pResultado.innerHTML = resultado
            document.body.appendChild(pResultado);})
        .catch(erro => pResultado.innerHTML = erro)
}