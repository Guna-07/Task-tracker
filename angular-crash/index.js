const { constants } = require('buffer');
const express = require('express');

const app = express();

const ports = process.env.port || 3000;

const  gro = [
    {
        id: 1,
        item: 'milk'
    },
    {
        id: 2,
        item: 'bread'
    },
];

app.get('/', (req, res) => {
    res.send(gro);
});
app.listen(3000, () => console.log(`listening at ${ports}`));