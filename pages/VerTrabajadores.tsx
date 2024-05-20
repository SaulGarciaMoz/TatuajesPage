import React, { useState, useEffect } from 'react';
import styles from './CSS/VerTrabajadores.module.css';
import Link from 'next/link';
import Header from './Components/Header';

const VerTrabajadores: React.FC = () => {
  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(() => {
    obtenerTrabajadores();
  }, []);

  const obtenerTrabajadores = async () => {
    try {
      const response = await fetch('/api/ObtenerTrabajadores');
      if (!response.ok) {
        throw new Error('Error al obtener los trabajadores');
      }
      const data = await response.json();
      setTrabajadores(data);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarTrabajador = async (id: string) => {
    try {
      const response = await fetch('./api/EliminarTrabajador', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el trabajador');
      }
      // Actualizar la lista de trabajadores después de eliminar un trabajador
      obtenerTrabajadores();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Lista de Trabajadores</h1>
        <Link href="/AgregarTrabajador" passHref>
          <button className={styles.addButton}>Agregar Trabajador</button>
        </Link>
        <ul className={styles.trabajadoresList}>
          {trabajadores.map((trabajador: any) => (
            <li key={trabajador._id}>
              <div className={styles.trabajador}>
                <p><strong>Nombre:</strong> {trabajador.nombre}</p>
                <p><strong>Especialidad:</strong> {trabajador.especialidad}</p>
                <p><strong>Estilo:</strong> {trabajador.estilo.join(', ')}</p>
                <p><strong>Email:</strong> {trabajador.email}</p>
                {/* Botón para eliminar el trabajador */}
                <button className={styles.deleteButton} onClick={() => eliminarTrabajador(trabajador._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerTrabajadores;
