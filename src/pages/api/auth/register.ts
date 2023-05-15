// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from 'next'

import User from '../../../../modals/user'
import connectMongoDB from '../../../../lib/mongodb'


const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName,lastName,email, password } = req.body

  if(!firstName || !lastName || !email || !password) {
    return res.status(422).json({ message: 'Lütfen tüm alanları doldurunuz' })
  }

  const user = await User.find({
    email: email
  })

  if(user.length > 0) {
    return res.status(422).json({ message: 'Bu kullanıcı sistemde kayıtlı' })
  }

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: "user"
    })


    res.status(201).json({ message: 'User created' })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongoDB()

  if(req.method === "POST") {
    return register(req, res)
  } else {
    res.status(405).send("Method not allowed");
  }
  
}



