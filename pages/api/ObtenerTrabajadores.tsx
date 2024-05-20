// api/ObtenerTrabajadores.ts

import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const client = new MongoClient(process.env.MONGODB_URI!);
    try {
      await client.connect();
      const db = client.db('NewEraTattoo'); 
      const collection = db.collection('Trabajadores');
      const trabajadores = await collection.find({}).toArray();
      res.status(200).json(trabajadores);
    } catch (error) {
      console.error('Error al obtener los trabajadores:', error);
      res.status(500).json({ error: 'Error al obtener los trabajadores' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no permitido' });
  }
}
