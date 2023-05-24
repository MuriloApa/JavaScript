var last = '';
var numbers = ['bZero', 'bUm', 'bDois', 'bTres', 'bQuatro', 'bCinco', 'bSeis', 'bSete', 'bOito', 'bNove'];

window.onload = function () {
    var cbuttons = document.getElementById('buttons');

    cbuttons.addEventListener('click', function (event) {

        let alvo = event.target;

        let tela = document.getElementById('sTela');

        switch (alvo.id) {
            case 'bAC':
                tela.innerHTML = '';
                last = 'bAC';
                break;
            case 'bIgual':
                let expression = tela.innerHTML;
                tela.innerHTML = eval(expression);
                last = 'bIgual';
                break;
            case 'bSete':
                if (last === 'bIgual') {
                    tela.innerHTML = '7';
                } else {
                    tela.innerHTML = tela.innerHTML + '7';
                }
                last = 'bSete';
                break;
            case 'bOito':
                if (last === 'bIgual') {
                    tela.innerHTML = '8';
                } else {
                    tela.innerHTML = tela.innerHTML + '8';
                }
                last = 'bOito';
                break;
            case 'bNove':
                if (last === 'bIgual') {
                    tela.innerHTML = '9';
                } else {
                    tela.innerHTML = tela.innerHTML + '9';
                }
                last = 'bNove';
                break;
            case 'bAdicao':
                if (numbers.indexOf(last) != -1) {
                    tela.innerHTML = tela.innerHTML + '+';
                }
                last = '+';
                break;
            case 'bSubtracao':
                if (numbers.indexOf(last) != -1) {
                    tela.innerHTML = tela.innerHTML + '-';
                }
                last = '-';
                break;
            case 'bQuatro':
                if (last === 'bIgual') {
                    tela.innerHTML = '4';
                } else {
                    tela.innerHTML = tela.innerHTML + '4';
                }
                last = 'bQuatro';
                break;
            case 'bCinco':
                if (last === 'bIgual') {
                    tela.innerHTML = '5';
                } else {
                    tela.innerHTML = tela.innerHTML + '5';
                }
                last = 'bCinco';
                break;
            case 'bSeis':
                if (last === 'bIgual') {
                    tela.innerHTML = '6';
                } else {
                    tela.innerHTML = tela.innerHTML + '6';
                }
                last = 'bSeis';
                break;
            case 'bMultiplicacao':
                if (numbers.indexOf(last) != -1) {
                    tela.innerHTML = tela.innerHTML + '*';
                }
                last = '*';
                break;
            case 'bDivisao':
                if (numbers.indexOf(last) != -1) {
                    tela.innerHTML = tela.innerHTML + '/';
                }
                last = '/';
                break;
            case 'bUm':
                if (last === 'bIgual') {
                    tela.innerHTML = '1';
                } else {
                    tela.innerHTML = tela.innerHTML + '1';
                }
                last = 'bUm';
                break;
            case 'bDois':
                if (last === 'bIgual') {
                    tela.innerHTML = '2';
                } else {
                    tela.innerHTML = tela.innerHTML + '2';
                }
                last = 'bDois';
                break;
            case 'bTres':
                if (last === 'bIgual') {
                    tela.innerHTML = '3';
                } else {
                    tela.innerHTML = tela.innerHTML + '3';
                }
                last = 'bTres';
                break;
            case 'bZero':
                if (last === 'bIgual') {
                    tela.innerHTML = '0';
                } else {
                    tela.innerHTML = tela.innerHTML + '0';
                }
                last = 'bZero';
                break;
            case 'bPonto':
                if (last === 'bIgual' || last === '+'|| last === '-' || last === '*' || last === '/'|| last === '%') {
                    tela.innerHTML = '.';
                } else {
                    tela.innerHTML = tela.innerHTML + '.';
                }
                last = '.';
                break;

            default:
                break;
        }
    });

}