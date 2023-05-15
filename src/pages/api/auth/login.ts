// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from 'next'

import User from '../../../../modals/user'
import connectMongoDB from '../../../../lib/mongodb'


const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body


    if (!email || !password) {
        return res.status(422).json({ message: 'Invalid email or password' })
    }
    const user = await User.findOne({
        email: email
    })


    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
        return res.status(422).json({ message: 'Invalid email or password' })
    }

    res.status(200).json({ message: 'User logged in' })


}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectMongoDB()

    if (req.method === "GET") {
        return login(req, res)
    } else {
        res.status(405).send("Method not allowed");
    }

}



