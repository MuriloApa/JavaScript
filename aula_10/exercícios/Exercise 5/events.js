function leiTurca(){
    document.getElementById('txtId').onkeydown = function(event) {
        if (event.key.toLowerCase() === 'q' || event.key.toLowerCase() === 'w' || event.key.toLowerCase() === 'x') {
            event.preventDefault();
        }
    }
}

window.onload = leiTurca;