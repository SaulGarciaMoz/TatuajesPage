import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fecha, hora, Descripcion, color, parteCuerpo, tamaño, telefono } = req.body;

    if (!fecha || !hora || !Descripcion || !tamaño || !telefono || !parteCuerpo || !color) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');

      // Insertar nueva cita
      const result = await db.collection('Reserva').insertOne({
        fecha,
        hora,
        Descripcion,
        tamaño,
        telefono,
        parteCuerpo,
        color
      });

      const cita = await db.collection('Reserva').findOne({ _id: result.insertedId });

      res.status(201).json({ message: 'Cita agendada exitosamente', cita });
    } catch (error: any) {
      res.status(500).json({ error: 'Error al agendar la cita', message: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no admitido' });
  }
}
