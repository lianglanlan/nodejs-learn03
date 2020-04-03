const express = require('express')

const app = express()

app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
    res.send('/page')
})
app.get('/post', (req, res) => {
    res.send('post')
})
app.listen(3000, () => console.log('running'))
