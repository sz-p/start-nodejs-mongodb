import mongoose from './connect';

// console.log(mongoose.Schema.Types);
const newSchema = new mongoose.Schema({},{
  versionKey: false,
  strict: false
});

export const newModel = mongoose.model('test', newSchema);
