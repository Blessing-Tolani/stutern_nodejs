## Using express generator and generate an express app, Give it a name of Nodejs Tutorial app

sudo npm install express-generator -g <br>
express Nodejs_Tutorial_app <br>
cd Nodejs_Tutorial_app <br>
npm install

const express = require('express'); <br>
const bodyParser = require('body-parser');

const app = express(); <br>
app.use(bodyParser.json()); <br>
const port = 8000;

app.post('/user', function (req, res) {
let user = req.body; <br>
res.status(200).json({
message: 'User successfully created',
user,
}); <br>
});

app.listen(port);

<!-- To test the assignment, run http://localhost:8000/user on postman and pass in a body with key, name, age and sex -->
