import { IAccount } from "../interfaces";
import {Schema, model} from 'mongoose';


const AccountSchema = new Schema<IAccount>({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number,required:true},
    key:{type:String, required:true}
});

export default model<IAccount>('Account',AccountSchema )