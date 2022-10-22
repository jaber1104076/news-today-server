const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./Data/Category.json')
const news = require('./Data/news.json')

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/news-category', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }

    else {
        const category_news = news.filter(c => c.category_id === id)
        res.send(category_news);
    }

})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.params.id)
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log('today news is ruuning on port :', port)
})