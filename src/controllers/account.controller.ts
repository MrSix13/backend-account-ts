import { Request,Response } from "express";
import { Account } from "../models";
import { setAccount,getAccounts } from "../services";


export const getAllAccounts = async(req:Request,res:Response)=>{
    try {
        const response = await getAccounts()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({err:error})
    }
};

export const createAccount = async({body}:Request, res:Response)=>{
    try {
        const response = await setAccount(body);
        return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({message:"Could'nt create the accouunt"})
    }
}