const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
nunjucks.configure('views', { autoescape: true, express: app });
app.set('view engine', 'njk')

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
    console.log(req.query)  //打印结果为 {},post请求不能通过这种方式获取请求主体
    const comment = req.query
    comments.unshift(comment)
    res.redirect('/')
})
app.listen(3000, () => console.log('running'))
