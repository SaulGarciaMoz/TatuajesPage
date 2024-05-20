import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'bson'; // Importa ObjectId desde 'bson'

const URI = "mongodb+srv://Advy:Nosequeponer@cluster0.573dgvj.mongodb.net/NewEraTatto?retryWrites=true&w=majority";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Falta el ID de la cita' });
    }

    const client = new MongoClient(URI);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');
      const collection = db.collection('Reserva');
      
      // cita de 'pendiente' a 'aceptada'
      const result = await collection.updateOne(
        { id: new ObjectId(id), estado: 'pendiente' }, 
        { $set: { estado: 'aceptada' } }
      );

      // Verifica si la cita fue encontrada y actualizada
      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: 'La cita no existe o ya ha sido aceptada' });
      }

      res.status(200).json({ message: 'Cita aceptada exitosamente' });
    } catch (error) {
      console.error('Error al aceptar la cita:', error);
      res.status(500).json({ error: 'Error al aceptar la cita' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no permitido' });
  }
}
