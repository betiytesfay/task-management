
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const taskRouter = require('./routes/taskRoutes.js')
app.use(bodyParser.json());
app.use('/', taskRouter)
app.get('/', (req, res) => {
  res.send('Server is running');
});


app.listen(5000, function () {
  console.log('server is running on port 5000')
})