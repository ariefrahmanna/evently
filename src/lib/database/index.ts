import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || '';
const DB_NAME: string = 'evently';

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
