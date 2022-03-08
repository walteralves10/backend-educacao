const express = require('express');
const app = express();

app.use('/', require('./route/usersRoute'));

app.listen(3000);