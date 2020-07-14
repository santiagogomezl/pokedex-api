const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server is listening at http://localhost:8000');
});
