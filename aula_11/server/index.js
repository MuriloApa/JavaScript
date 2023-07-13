const express = require('express');
const cors = require('cors')

let paragrafos = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et odio finibus, fringilla tortor eu, fermentum nulla. In convallis ullamcorper consequat. Integer nulla eros, venenatis vel risus vel, fringilla consequat velit. Pellentesque aliquam non dui non porttitor.", 
    'Praesent volutpat lobortis enim, id luctus ligula porta vitae. Sed laoreet vel nulla vellaoreet. Duis vitae lacus et felis dignissim gravit. Proin convallis egestas tellus iaculis commodo. Maecenas ut lectus a mauris finibus luctus vel non turpis.', 
    'Ut ultricies ex non magna bibendum tincidunt. Integer varius fermentum ligula velpellentesque. Quisque quam neque, tristique at gravida quis, tristique a orci. Maecenas eget bibendum mauris. Maecenas elementum tristique quam, ac hendrerit metus cursus dapibus', 
    'Phasellus eget rutrum orci, eu efficitur nisi. Curabitur ac dui sodales, tempus urna ac, rhoncus magna. Vivamus sed mi luctus, laoreet elit quis, vestibulum erat. Vivamus in quam ut mauris pretium pellentesque.', 
    'Etiam felis risus, tristique at blandit quis, faucibus ut turpis. Nullam eu facilisisnulla. Etiam eu mi ipsum. Nunc convallis ipsum vitae enim ullamcorper aliquet. Vivamus mollis mivelit, quis aliquam justo blandit eu.', 
    'Proin hendrerit, tortor a rhoncus pellentesque, mauris urna volutpat nisi, necscelerisque orci augue sit amet risus. Aliquam in imperdiet eros.']

const app = express();

app.use(cors());

app.get('/app', function(req, resp){
    console.log("Requisição GET no caminho /app");
    texto = paragrafos.pop();
    if (texto != undefined) {
        resp.send(texto);
    } else {
        resp.send("Não é possível incluir novos parágrafos");
    }
    
})

app.listen(3000, function(){
    console.log("Ta rodando o servidor!");  
})