const express = require('express');

const app = express();

app.use('/static', express.static('public'));


const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
  /*  res.header('Content-Type','application/json');*/
    next();
};
app.use(allowCrossDomain);

app.get('/getTest', (req, res) => res.send('Got a GET request!'));

app.get('/getJsonTest', (req, res) => res.json({status:400}));

app.post('/postTest', (req, res) => res.json({status:400,message:'提交成功！'}));

app.post('/uploadFile', (req, res) => res.json({status:400,message:'上传成功！', data: {}}));


app.listen(3000, () => console.log('Example app listening on port 3000!'));