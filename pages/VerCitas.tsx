import React, { useState, useEffect } from 'react';
import styles from './CSS/VerCitas.module.css';
import Header from './Components/Header';

const VerCitas: React.FC = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    obtenerCitasPendientes();
  }, []);

  const obtenerCitasPendientes = async () => {
    try {
      const response = await fetch('/api/VerCitas');
      if (!response.ok) {
        throw new Error('Error al obtener las citas pendientes');
      }
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const aceptarCita = async (id: string) => {
    try {
      const response = await fetch('/api/AceptarCitas', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), 
      });
      if (!response.ok) {
        throw new Error('Error al aceptar la citaaaaaaaaaa');
      }
      // Actualizar la lista de citas después de aceptar una cita
      obtenerCitasPendientes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Citas Pendientes</h1>
        {citas.map((cita: any) => (
          <div key={cita.id} className={styles.cita}>
            <p>Fecha: {cita.fecha}</p>
            <p>Descripción: {cita.Descripcion}</p>
            <p>Estado: {cita.estado}</p>
            <p>Color: {cita.color}</p>
            <p>Parte del Cuerpo: {cita.parteCuerpo}</p>
            <p>Tamaño: {cita.tamaño}</p>
            <div className={styles['button-container']}>
              {cita.estado === 'pendiente' && (
                <button onClick={() => aceptarCita(cita.id)}>Aceptar Cita</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerCitas;
