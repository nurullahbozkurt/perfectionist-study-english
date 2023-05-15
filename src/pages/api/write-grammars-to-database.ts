import connectMongoDB from '../../../lib/mongodb';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import dynamicGrammar from '../../../modals/dynamicGrammar';

const grammarFiles = [
  'am-is-are-going-to.json',
  'am-is-are-ving.json',
  'am-is-are.json',
  'did.json',
  'do-does.json',
  'had-been-ving.json',
  'had-been.json',
  'had-v3.json',
  'have-been-has-been-ving.json',
  'have-been-has-been.json',
  'have-has-v3.json',
  'was-were-ving.json',
  'was-were.json',
  'will-be-ving.json',
  'will-be.json',
  'will-have-been.json',
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
      for (const file of grammarFiles) {
        const groupName = file.replace('.json', '');
        const data = fs.readFileSync(`src/data/grammars/${file}`, 'utf-8');
        const grammars = JSON.parse(data);

        const collectionName = `grammar_${groupName}`;

        const GrammarModel = dynamicGrammar(collectionName);

        for (const grammar of grammars) {
          const newGrammar = new GrammarModel({
            index: grammar.index,
            turkishSentence: grammar.turkishSentence,
            englishSentence: grammar.englishSentence,
            topic: grammar.topic,
          });

          await newGrammar.save();
        }
      }

      res.status(200).json({ message: 'Veritabanına yazıldı.' });
    } catch (error) {
      res.status(500).json({ error: 'Bir hata oluştu.' });
    }
  }
}
