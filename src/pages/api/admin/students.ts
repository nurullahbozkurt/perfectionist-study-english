// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import User from '../../../../modals/user'
import connectMongoDB from '../../../../lib/mongodb'

const getStudents = async (req: NextApiRequest, res: NextApiResponse) => {
    const user = await User.find({
        role: "user"
    }).sort({ createdAt: -1 })

    if(!user) return res.status(400).json({message: "No user found"})

    res.status(200).json(user)
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectMongoDB()

    if(req.method === "GET") {
        return getStudents(req, res)
    } 



    res.status(405).send("Method not allowed");


}



