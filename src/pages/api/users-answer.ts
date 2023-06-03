import type { NextApiRequest, NextApiResponse } from 'next'

import UserAnswer from '../../../modals/usersAnswer'

import connectMongoDB from '../../../lib/mongodb'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongoDB()

 if(req.method === "POST"){
    const { user, topic, sentence, userSentence, correctSentence } = req.body

    console.log("body", user, topic, sentence, userSentence, correctSentence, req.body )

    await UserAnswer.create({
        user: user,
        topic: topic,
        sentence: sentence,
        userSentence: userSentence,
        correctSentence: correctSentence,
        createdAt: Date.now(),
    })

    res.status(200).json({ message: 'UserAnswer created' })
 }
 res.status(405).send("Method not allowed");
  

}
