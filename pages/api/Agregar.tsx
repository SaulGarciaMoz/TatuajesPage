import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, apellido, email, telefono, direccion, pwd } = req.body;

    if (!nombre || !apellido || !email || !telefono || !direccion || !pwd) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const client = new MongoClient(process.env.MONGODB_URI!);

    try {
      await client.connect();
      const db = client.db('NewEraTattoo');

      // Verificar correo
      const existingCliente = await db.collection('Clientes').findOne({ email });
      if (existingCliente) {
        return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
      }

      // Si no hay un cliente con el mismo correo electrónico
      const result = await db.collection('Clientes').insertOne({
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        pwd,
        role: 'cliente'
      });

      const cliente = await db.collection('Clientes').findOne({ _id: result.insertedId });

      res.status(201).json({ message: 'Cliente creado exitosamente', cliente });
    } catch (error: any) { 
      res.status(500).json({ error: 'Error al crear el cliente', message: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método HTTP no admitido' });
  }
}
