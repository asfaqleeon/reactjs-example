let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test',(req,res)=>{
    res.json({success:'ok'});
})

app.post('/test', (req,res)=>{
    //console.log(req.body);
    let result = req.body.numbers.num1 * req.body.numbers.num2;
    res.json({result});
})

app.listen(3001,()=>{
    console.log('running');
})