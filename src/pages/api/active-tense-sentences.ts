// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongoDB from '../../../lib/mongodb';
import dynamicActiveTense from '../../../modals/dynamicActiveTense';

type SentenceData = {
  index: number;
  turkishSentence: string;
  englishSentence: string;
  topic: string;
};

type Data = SentenceData[];


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectMongoDB();

  if (req.method === 'GET') {
    const collectionName = req.query.collectionName as string;
    if(!collectionName) {
      res.status(200).json([]);
      return;
    }
    const DynamicModel = dynamicActiveTense(collectionName);
    const data = await DynamicModel.find();
    res.status(200).json(data);
  }
}
