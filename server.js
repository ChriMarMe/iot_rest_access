const { response } = require('express');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
const {Pool} = require("pg");
const pool = new Pool ({
    user: 'postgres',
    host: 'postgres',
    database: 'internet_of_dinge',
    password: 'adminpw',
    port: '5432',
});

app.use(bodyParser.json());

app.post('/', ( req,res ) => {
    console.log(req.body)
    const {css811_eco2,css811_etvoc,mq9_ac,mq9_av,mq9_dv} = req.body;
    pool.query('INSERT INTO iotproject.gajewskisensor (css811_eco2,css811_etvoc,mq9_ac,mq9_av,mq9_dv) VALUES ($1,$2,$3,$4,$5)',
        [css811_eco2,css811_etvoc,mq9_ac,mq9_av,mq9_dv], (error,result) => {
            if(error) {
                throw error;
            }
            res.status(201).send(`Data added to DB succssesfully`);
        })
})


var server = app.listen(8085, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})