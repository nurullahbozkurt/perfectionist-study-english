// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from 'next'

import Review from '../../../../modals/review'
import connectMongoDB from '../../../../lib/mongodb'


const getReviews = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("getReviews")
    const reviews = await Review.find({
        sendToTeacher: true
    }).sort({ createdAt: -1 }).populate('user',{password:0})

    console.log("reviews",reviews)

    res.status(200).json(reviews)
}

const updateReview = async (req: NextApiRequest, res: NextApiResponse) => {
    const { reviewId,teacherAnswer } = req.body
console.log("reviewId",reviewId)
    const review = await Review.findOne({
        _id: reviewId
    })
    console.log("review",review)
    if (!review) {
        return res.status(404).send("Review not found")
    }

    review.teacherAnswer = teacherAnswer
    await review.save()

    res.status(200).json(review)
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectMongoDB()

    if(req.method === "GET") {
        return getReviews(req, res)
    } 
    if(req.method === "PUT") {
        return updateReview(req, res)
    }


    res.status(405).send("Method not allowed");


}



