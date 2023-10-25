const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

//definindo handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodemysql',
    port: 3307
})

conn.connect((error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log('Conectado no MySQL!')

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000!')
    })
})