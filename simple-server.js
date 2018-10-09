let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

app.get('/test',(req,res)=>{
    res.json({success:'ok'});
})

app.listen(3001,()=>{
    console.log('running');
})