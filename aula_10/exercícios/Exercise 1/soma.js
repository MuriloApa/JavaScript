/* let n1 = Number(window.prompt('Digite o primeiro número: '));
let n2 = Number(window.prompt('Digite o segundo número: '));
let soma = n1 + 2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let modulo = n1 % n2; */

function createCell(conteudo){
    let cell = document.createElement('td');
    cell.innerHTML = conteudo;
    return cell;
}

function createCellHeader(conteudo){
    let cell = document.createElement('th');
    cell.innerHTML = conteudo;
    return cell;
}

function createRowHeader(){
    let linha = document.createElement('tr');
    linha.appendChild(createCellHeader('Operação'));
    linha.appendChild(createCellHeader('Valor'));
    return linha;
}

function createRow(n1, n2, operation){
    let linha = document.createElement('tr');
    linha.appendChild(createCell(n1 + ' ' + operation + ' ' + n2))

    switch (operation) {
        case '+':
            linha.appendChild(createCell(n1 + n2));
            break;
        case '-':
            linha.appendChild(createCell(n1 - n2));
            break;
        case '*':
            linha.appendChild(createCell(n1 * n2));
            break;
        case '/':
            linha.appendChild(createCell(n1 / n2));
            break;
        case '%':
            linha.appendChild(createCell(n1 % n2));
            break;
        default:
            break;
    }
    return linha
}

function createTable (n1, n2){
    var tabela = document.createElement('table');
    
    tabela.appendChild(createRowHeader());
    tabela.appendChild(createRow(n1, n2, '+'));
    tabela.appendChild(createRow(n1, n2, '-'));
    tabela.appendChild(createRow(n1, n2, '*'));
    tabela.appendChild(createRow(n1, n2, '/'));
    tabela.appendChild(createRow(n1, n2, '%'));
    
    document.body.appendChild(tabela);
}

function main(){
    n1 = parseInt(window.prompt('Digite o primeiro número: '));
    n2 = parseInt(window.prompt('Digite o segundo número: '));
    createTable(n1, n2)
}

window.onload = main;