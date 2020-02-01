import mongoose from './connect';

// console.log(mongoose.Schema.Types);
const collectionDocument = new mongoose.Schema({
  UUID: { type: String, index: true, required: true },
  testFunction: { type: Object },
  testExp: { type: Object },
  testBASE64IMG: { type: String },
  testdate: { type: Date, default: Date.now },
  testArray: [{
    name: { type: String, },
    value: { type: Number }
  }],
  testJSON: {
    type: JSON
  },
  testHTMLobj: {
    type: Object
  }
})

const testCollectionModel = mongoose.model('test', collectionDocument)

export default {
  testCollectionModel
};
