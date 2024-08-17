import Express from "express";

require('dotenv').config();

const app = Express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, () => {
    return console.error('Puerto usado ${port}')
});