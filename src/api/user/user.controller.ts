import {Request, Response} from 'express';

export const index = async (req: Request, res: Response) => {
    console.log("req:", req.params)
    console.log("body:", req.body)
    return res.status(200).json({message: req.body})
}

export const create = async (req: Request, res: Response) => {
    console.log("req:", req)
    console.log("body:", req.body)
    return res.status(200).json({message: req.body})
}

export const remove = async (req: Request, res: Response) => {
    console.log("req:", req.params)
    return res.status(200).json({message: "success!"})
}

export const update = async (req: Request, res: Response) => {
    console.log("req:", req.params)
    console.log("body:", req.body)
    return res.status(200).json({message: req.body})
}