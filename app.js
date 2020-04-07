const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')

const app = express()
nunjucks.configure('views', { autoescape: true, express: app });
app.set('view engine', 'njk')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    }
]

app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
    res.render('index', {
        comments
    })
})
app.get('/post', (req, res) => {
    res.render('post')
})
app.post('/pinglun', (req, res) => {
    const comment = req.body
    comments.unshift(comment)
    res.redirect('/')
})
app.listen(3000, () => console.log('running'))
