const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routers/userRouter');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(port, () => console.log(`App is listening on port ${port}!`));
