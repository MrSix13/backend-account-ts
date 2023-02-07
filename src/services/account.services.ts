import { IAccount } from "../interfaces";
import { Account } from "../models";



const setAccount = async(item:IAccount)=>{
    const responseInsert = await Account.create(item)
    return responseInsert
};

const getAccounts = async()=>{
    const responseAccounts = await Account.find();
    return responseAccounts
};


export {
    setAccount,
    getAccounts
}