const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/styles', express.static('styles'))


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})


app.get('/', (req, res) => {
    res.render('home', { layout: 'main' });
})