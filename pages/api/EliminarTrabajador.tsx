// pages/api/EliminarTrabajador.ts
import { MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const URI = "mongodb+srv://Advy:Nosequeponer@cluster0.573dgvj.mongodb.net/NewEraTatto?retryWrites=true&w=majority";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Falta el ID del trabajador' });
    }

    const client = new MongoClient(URI);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');
      const collection = db.collection('Trabajadores');

      // Eliminar el trabajador
      const result = await collection.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'El trabajador no existe' });
      }

      res.status(200).json({ message: 'Trabajador eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar el trabajador:', error);
      res.status(500).json({ error: 'Error al eliminar el trabajador' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no permitido' });
  }
}
