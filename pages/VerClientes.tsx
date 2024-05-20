import React, { useState, useEffect } from 'react';
import styles from './CSS/VerClientes.module.css'; // Importa los estilos CSS de módulo
import Link from 'next/link';
import Header from './Components/Header';

const VerClientes: React.FC = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    try {
      const response = await fetch('/api/ObtenerClientes');
      if (!response.ok) {
        throw new Error('Error al obtener los clientes');
      }
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarCliente = async (id: string) => {
    try {
      const response = await fetch('/api/EliminarCliente', { // Corregido: Cambia el punto (.) por una barra (/) al principio de la URL
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el cliente');
      }
      // Actualizar la lista de clientes después de eliminar un cliente
      obtenerClientes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <Header />
    <div className={styles.container}>
      <h1>Lista de Clientes</h1>
      <ul className={styles.clientesList}>
        {clientes.map((cliente: any) => (
          <li key={cliente._id}>
            <div className={styles.cliente}>
              <p><strong>Nombre:</strong> {cliente.nombre}</p>
              <p><strong>Apellido:</strong> {cliente.apellido}</p>
              <p><strong>Email:</strong> {cliente.email}</p>
              <p><strong>Teléfono:</strong> {cliente.telefono}</p>
              <p><strong>Dirección:</strong> {cliente.direccion}</p>
              {/* Botón para eliminar el cliente */}
              <button className={styles.deleteButton} onClick={() => eliminarCliente(cliente._id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default VerClientes;
