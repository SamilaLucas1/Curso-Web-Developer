const express = require('express');
const app = express();

app.listen(3000, console.log('Server is running on port 3000'));

app.use(express.json());

const routes = require('./routes');
app.use(routes);

const prisma = require('./databases');
prisma.$connect()
    .then(() => console.log('Databases is connected...'))
    .catch((error) => console.log(error));