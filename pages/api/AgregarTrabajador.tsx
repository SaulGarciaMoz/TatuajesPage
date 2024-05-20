import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, especialidad, estilo, email, pwd } = req.body;

    if (!nombre || !especialidad || !estilo || !email || !pwd) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');

      // Verificar si ya existe un trabajador con el mismo correo electrónico
      const existingTrabajador = await db.collection('Trabajadores').findOne({ email });
      if (existingTrabajador) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado como trabajador' });
      }

      // Si no hay un trabajador con el mismo correo electrónico, insertar el nuevo trabajador
      const result = await db.collection('Trabajadores').insertOne({
        nombre,
        especialidad,
        estilo,
        email,
        pwd,
        role: 'trabajador'
      });

      const trabajador = await db.collection('Trabajadores').findOne({ _id: result.insertedId });

      res.status(201).json({ message: 'Trabajador creado exitosamente', trabajador });
    } catch (error: any) {
      res.status(500).json({ error: 'Error al crear el trabajador', message: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no admitido' });
  }
}
