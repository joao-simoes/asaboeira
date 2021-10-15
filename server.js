const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(morgan('common'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('pt.ejs')
})

app.listen(PORT, () => { console.log(`SERVER RUNNING ON PORT ${PORT}!`) })