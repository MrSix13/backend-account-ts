import mongoose from 'mongoose';
import { app } from './app';


const port:string|undefined = process.env.PORT;

const startServer = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log('Connected to Db');
        app.listen(port,()=>console.log('Server Running on port', port));
    } catch (error) {
        console.log('failed to connect to the db')
        console.log(error)
    }
}

startServer()