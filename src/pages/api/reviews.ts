// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from 'next'

import Review from '../../../modals/review'
import connectMongoDB from '../../../lib/mongodb'


const addReview = async (req: NextApiRequest, res: NextApiResponse) => {
    const { yourSentence, correctSentence, sentence, reviewNote,grammar } = req.body
    console.log("Grammar",grammar)

    await Review.create({
        user: req.body.user,
        sentence: sentence,
        yourSentence: yourSentence,
        correctSentence: correctSentence,
        reviewNote: reviewNote, 
        grammar: grammar,
        createdAt: new Date()
    })

    res.status(200).json({ message: 'Review created' })

}

const getReviews = async (req: NextApiRequest, res: NextApiResponse) => {
    const reviews = await Review.find({
        user: req.query.userId
    }).sort({ createdAt: -1 })

    res.status(200).json(reviews)
}

const updateReview = async (req: NextApiRequest, res: NextApiResponse) => {
    const review = await Review.findById(req.body.itemId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
  
    review.enabled = !review.enabled;
    await review.save();
  
    res.status(200).json({ message: "Review updated", review });
  };

  const deleteReview = async (req: NextApiRequest, res: NextApiResponse) => {
    const review = await Review.findById(req.query.itemId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    await review.deleteOne();
    res.status(200).json({ message: "Review deleted" });

  }
  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectMongoDB()

    if (req.method === "POST") {
        return addReview(req, res)
    } 

    if(req.method === "GET") {
        return getReviews(req, res)
    } 

    if(req.method === "PUT"){
        return updateReview(req, res)
    }
    if(req.method === "DELETE"){
        return deleteReview(req, res)
    }

    res.status(405).send("Method not allowed");


}



