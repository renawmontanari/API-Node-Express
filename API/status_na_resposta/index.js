const express = require('express')
const app = express()

app.use(express.json())

// Rotas - Endpoints
app.post('/createproduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price 

    if(!name) {
        res.status(422).json({ message: 'O campo nome é obrigatorio' })
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({ message: `O produto ${name} foi criado com sucesso!` })

})

app.listen(3000) 