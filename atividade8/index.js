const express = require("express")
const app = express();

app.get('/bemvindo',(request, response) => {
    return response.send('Bem Vindo')

})
app.listen(3333,function(){
    console.log("servidor ligado na porta 3333")
})