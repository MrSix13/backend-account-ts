import express,{Application, Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import {router} from './routes/index'

const app:Application = express();
app.use(express.json());
app.use(router);

//Import routes

//Declare routes
app.get('/', (req:Request,res:Response)=>{
    res.send({message:'Its works'})

})


export {app}

