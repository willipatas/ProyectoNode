import Express from "express";

const app = Express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, () => {
    return console.error('No responde, vaya y revise algo, pero corra!!!')
});