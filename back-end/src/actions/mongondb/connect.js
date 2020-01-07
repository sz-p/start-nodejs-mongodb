import mongoose from 'mongoose';
import config from '../../../configs/app.config';

const { host, port, dbName } = config.mongodb.mongodbConfig;

// Connection URL
const url = `mongodb://${host}:${port}/${dbName}`;
const db = mongoose.connection;
mongoose.connect(url);
db.on('connected', () => {
  console.log('mongo connect Success');
});
export default mongoose;
