import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB || 'redrhymes';

if (!uri) {
  throw new Error('MONGODB_URI is not configured.');
}

declare global {
  // eslint-disable-next-line no-var
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise() {
  const clientPromise =
    global.mongoClientPromise ||
    new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    }).connect();

  if (process.env.NODE_ENV !== 'production') {
    global.mongoClientPromise = clientPromise;
  }

  return clientPromise;
}

export async function getMongoDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(databaseName);
}
