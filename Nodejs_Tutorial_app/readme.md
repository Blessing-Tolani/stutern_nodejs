## Using express generator and generate an express app, Give it a name of Nodejs Tutorial app

sudo npm install express-generator -g
express Nodejs_Tutorial_app
cd Nodejs_Tutorial_app
npm install

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 8000;

app.post('/user', function (req, res) {
let user = req.body;
res.status(200).json({
message: 'User successfully created',
user,
});
});

app.listen(port);

<!-- To test the assignment, run http://localhost:8000/user on postman and pass in a body with key, name, age and sex -->
