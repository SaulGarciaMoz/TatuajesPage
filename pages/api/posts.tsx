import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    if (!process.env.MONGODB_URI) {
      res.status(500).json({ error: 'MONGODB_URI environment variable is not defined' });
      return;
    }
    
    const client = new MongoClient(process.env.MONGODB_URI);
    

    try {
      await client.connect();
      const db = client.db();
      const posts = await db.collection('Clientes').find({}).toArray();
      console.log("Connected to MongoDB")
  
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Unable to connect to database' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Unsupported HTTP method' });
  }
}
