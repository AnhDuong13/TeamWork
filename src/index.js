
const path = require('path');
const express = require('express')
const app = express();
const port = 3000;
const handlebars  = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));


app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get("/", (req, res)=>{
    res.render('home')
})
app.get("/news", (req, res)=>{
    res.render('news')
})
app.get("/search", (req, res)=>{
    console.log(req.query.q)
    res.render('search')
})

app.listen(port, ()=> console.log("Listening on port "+port))