import connectMongoDB from '../../../lib/mongodb';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import dynamicActiveTense from '../../../modals/dynamicActiveTense';

const activeTensesFile = [
  'am-is-are-going-to-v1.json',
  'am-is-are-ving.json',
  'am-is-are.json',
  'did.json',
  'do-does.json',
  'had-been-ving.json',
  'had-been.json',
  'had-v3.json',
  'have-been-has-been-ving.json',
  'have-been-has-been.json',
  'have-v3-has-v3.json',
  'was-were-ving.json',
  'was-were.json',
  'will-be-ving.json',
  'will-be.json',
  'will-have-been-ving.json',
  'will-have-v3.json',
  'will-v1.json'
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    await connectMongoDB();

    try {
      // Veritabanına kaydetme işlemleri
      for (const file of activeTensesFile) {
        const groupName = file.replace('.json', '');
        const data = fs.readFileSync(`src/data/active-tenses/${file}`, 'utf-8');
        const activeTenses = JSON.parse(data);

        const collectionName = `activeTense_${groupName}`;

        const ActiveTenseModal = dynamicActiveTense(collectionName);

        for (const activeTense of activeTenses) {
            const {
              positiveSentence,
              negativeSentence,
              questionSentence,
              negativeInterrogativeSentence
            } = activeTense;

            console.log("positiveSentence::", positiveSentence)
          
            const newActiveTense = new ActiveTenseModal({
              positiveSentence:  {
                english: positiveSentence[0].english ,
                turkish: positiveSentence[0].turkish 
              },
              negativeSentence: {
                english: negativeSentence[0].english ,
                turkish: negativeSentence[0].turkish 
              },
              questionSentence:
              {
                english: questionSentence[0].english ,
                turkish: questionSentence[0].turkish 
              },
              negativeInterrogativeSentence: 
              {
                english: negativeInterrogativeSentence[0].english ,
                turkish: negativeInterrogativeSentence[0].turkish 
              }
            });
          
            await newActiveTense.save();
          }
          
      }

      res.status(200).json({ message: 'Veritabanına yazıldı.' });
    } catch (error) {
      res.status(500).json({ error: 'Bir hata oluştu.' });
    }
  }
}
