import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
const client = new MongoClient(process.env.MONGODB_URI!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = new MongoClient(process.env.MONGODB_URI!);
      await client.connect();
      const db = client.db('NewEraTattoo');
      const collection = db.collection('Reserva');
      const citas = await collection.find({}).toArray();
      res.status(200).json(citas);
    } catch (error) {
      console.error('Error al obtener las citas pendientes:', error);
      res.status(500).json({ error: 'Error al obtener las citas pendientes' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no permitido' });
  }
}
