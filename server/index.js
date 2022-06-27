const express = require ('express')
const app = express();
const port = 8000
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.get ('/' , (req , res) => {
    res.send ('Server test.')
})

app.post ('/subscribe' , (req , res) => {
    const body = req.body;
    
    const { email, nome, whatsapp} = body;
    
    console.log('Nova inscrição: ', nome, email, whatsapp);

    if (!nome || !email || !nome && !email) {
        res.status(400).send({ok: false})
    } else {
        res.status(201).send({ok: true})
    }

})


app.listen (port , () => {
    console.log ('Servidor Rodando, pode começar a testar o formulário')
})