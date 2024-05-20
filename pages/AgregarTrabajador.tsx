// AgregarTrabajador.tsx
import React, { useState } from 'react';
import styles from './CSS/AgregarTrabajador.module.css';

const AgregarTrabajador: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [estilo, setEstilo] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/AgregarTrabajador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, especialidad, estilo: estilo.split(','), email, pwd }),
      });
      if (!response.ok) {
        throw new Error('Error al agregar el trabajador');
      }
      window.location.href = '/VerTrabajadores';
    } catch (error) {
      console.error(error);
      window.location.href = '/VerTrabajadores';
    }
  };

  return (
    <div className={styles.container}>
      <h1>Agregar Trabajador</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre" className={styles.label}>Nombre</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="especialidad" className={styles.label}>Especialidad</label>
          <input type="text" id="especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="estilo" className={styles.label}>Estilo</label>
          <input type="text" id="estilo" value={estilo} onChange={(e) => setEstilo(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="pwd" className={styles.label}>Contraseña</label>
          <input type="password" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>Agregar Trabajador</button>
        </div>
      </form>
    </div>
  );
};

export default AgregarTrabajador;
