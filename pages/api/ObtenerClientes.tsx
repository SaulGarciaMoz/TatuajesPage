import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const URI = "mongodb+srv://Advy:Nosequeponer@cluster0.573dgvj.mongodb.net/NewEraTatto?retryWrites=true&w=majority";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const client = new MongoClient(URI);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');
      const collection = db.collection('Clientes');
      const clientes = await collection.find({}).toArray();
      res.status(200).json(clientes);
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
      res.status(500).json({ error: 'Error al obtener los clientes' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no permitido' });
  }
}
