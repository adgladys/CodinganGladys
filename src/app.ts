import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import http from 'http';
import config from './environtment';

const app = express()

app.use(cors({origin:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const server = http.createServer(app);
//server initialization
function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log('Express server listening on %d, in %s mode %s, config.port, config.host, config.env');
    });
}

setImmediate(startServer);

export default app;

app.get('/api/index/:id', (req, res) => {
    console.log("req:", req.params)
    console.log("body:", req.body)
    return res.status(200).json({message: req.body})
})

app.post('/api/create', (req, res) => {
    console.log("req:", req)
    console.log("body:", req.body)
    return res.status(200).json({message: req.body})
})

app.delete('/api/remove/:id', (req,res) => {
    console.log("req:", req.params)
    return res.status(200).json({message: "success!"})
})

app.put('/api/update/:id', (req, res) => {
    console.log("req:", req.params)
    console.log("body:", req.body)
    return res.status(200).json({message: req.body})
})