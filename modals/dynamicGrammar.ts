import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';

mongoose.pluralize(null);

const dynamicGrammar = (collectionName: string) => {
  const existingModel = models[collectionName];
  if (existingModel) {
    return existingModel;
  }

  const dynamicSchema = new Schema({
    index: { type: Number, required: true },
    turkishSentence: { type: String, required: true },
    englishSentence: { type: String, required: true },
    topic: { type: String, required: true },
  });

  const dynamicModel = models[collectionName] || model(collectionName, dynamicSchema);

  return dynamicModel;
};

export default dynamicGrammar;
