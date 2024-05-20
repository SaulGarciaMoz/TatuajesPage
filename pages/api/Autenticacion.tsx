import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://Advy:Nosequeponer@cluster0.573dgvj.mongodb.net/NewEraTatto?retryWrites=true&w=majority";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const client = new MongoClient(URI);
    try {
      await client.connect();
      const db = client.db('NewEraTattoo');

      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Por favor, proporcione correo electrónico y contraseña.' });
      }

      //colección de Clientes
      let user = await db.collection('Clientes').findOne({ email });

      //colección de Trabajadores
      if (!user) {
        user = await db.collection('Trabajadores').findOne({ email });

        //colección de Administradores
        if (!user) {
          user = await db.collection('Admin').findOne({ email });

          //error
          if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas.' });
          }
        }
      }

      // Verifica la contraseña
      if (password !== user.pwd) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
      }

      //redirección
      if (user.role === 'cliente') {
        return res.status(200).json({ message: 'Inicio de sesión exitoso.', redirect: '/Scroll' });
      } else if (user.role === 'trabajador') {
        return res.status(200).json({ message: 'Inicio de sesión exitoso.', redirect: '/ScrollTatuador' });
      } else if (user.role === 'admin') {
        return res.status(200).json({ message: 'Inicio de sesión exitoso.', redirect: '/ScrollAdmin' });
      }

    } catch (error) {
      console.error('Error al autenticar al usuario:', error);
      return res.status(500).json({ error: 'Error al autenticar al usuario.' });
    } finally {
      // Cerrar la conexión
      if (client) {
        await client.close();
      }
    }
  } else {
    return res.status(405).json({ error: 'Método HTTP no admitido.' });
  }
}
