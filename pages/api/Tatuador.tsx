import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, especialidad, estilo,email } = req.body;

    if (!nombre || !especialidad || !estilo || !email) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');

      // Verificar si ya existe un cliente con el mismo correo electrónico
      const existingCliente = await db.collection('Trabajadores').findOne({ email });
      if (existingCliente) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
      }

      // Si no hay un cliente con el mismo correo electrónico, insertar el nuevo cliente
      const result = await db.collection('Trabajadores').insertOne({
        nombre,
        especialidad,
        estilo,
        email
      });

      const cliente = await db.collection('Trabajadores').findOne({ _id: result.insertedId });

      res.status(201).json({ message: 'Tatuador creado exitosamente', cliente });
    } catch (error: any) { 
      res.status(500).json({ error: 'Error al crear el Trabajador', message: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no admitido' });
  }
}
