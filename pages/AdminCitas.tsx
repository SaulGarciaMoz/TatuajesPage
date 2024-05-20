// pages/VerCitas.tsx
import React, { useState, useEffect } from 'react';
import styles from './CSS/VerCitas.module.css';
import Link from 'next/link';
import Header from './Components/Header';

const VerCitas: React.FC = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    obtenerCitas();
  }, []);

  const obtenerCitas = async () => {
    try {
      const response = await fetch('/api/ObtenerCitas');
      if (!response.ok) {
        throw new Error('Error al obtener las citas');
      }
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header/>
    <div className={styles.container}>
      <h1>Lista de Citas</h1>

      <ul className={styles.citasList}>
        {citas.map((cita: any) => (
          <li key={cita._id}>
            <div className={styles.cita}>
              <p><strong>ID:</strong> {cita.id}</p>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <p><strong>Tamaño:</strong> {cita.tamaño}</p>
              <p><strong>Parte del Cuerpo:</strong> {cita.parteCuerpo}</p>
              <p><strong>Color:</strong> {cita.color}</p>
              <p><strong>Descripcion:</strong> {cita.Descripcion}</p>
              <p><strong>Estado:</strong> {cita.estado}</p>

            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default VerCitas;
