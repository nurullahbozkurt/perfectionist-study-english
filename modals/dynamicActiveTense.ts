import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';

mongoose.pluralize(null);

const dynamicActiveTense = (collectionName: string) => {
  const existingModel = models[collectionName];
  if (existingModel) {
    return existingModel;
  }

  const dynamicSchema = new Schema({
    positiveSentence: [
        {
          english: { type: String, required: true },
          turkish: { type: String, required: true }
        }
      ],
      negativeSentence: [
        {
          english: { type: String, required: true },
          turkish: { type: String, required: true }
        }
      ],
      questionSentence: [
        {
          english: { type: String, required: true },
          turkish: { type: String, required: true }
        }
      ],
      negativeInterrogativeSentence: [
        {
          english: { type: String, required: true },
          turkish: { type: String, required: true }
        }
      ]
  });

  const dynamicModel = models[collectionName] || model(collectionName, dynamicSchema);

  return dynamicModel;
};

export default dynamicActiveTense;
