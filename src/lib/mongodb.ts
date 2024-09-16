import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to the .env file.');
}

const options = {};

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise as Promise<MongoClient>;
