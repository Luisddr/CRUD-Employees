const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const apiRouter = require('./routes/index.js')

const app = express();
require('./db')

app.name='API'

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
     next()
  });

app.use('/', apiRouter)

app.get('/', (req, res)=>{
    res.send("hola mundo")
})

app.listen(3001, ()=>{
    console.log("Server listening on port 3001")
})