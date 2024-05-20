import React, { useState } from 'react';
import styles from './CSS/crearcuenta.module.css';
import { useRouter } from 'next/router';

const CrearCliente = () => {
  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    pwd: ''
  });

  const [error, setError] = useState('');
  const [notificacion, setNotificacion] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCliente(prevCliente => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/Agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      });
      const data = await response.json();
      console.log(data);
      if (response.status !== 400) {
        router.push('/Scroll'); 
      } else {
        // Muestra la notificación de error de correo existente
        setNotificacion(true);
        setTimeout(() => {
          setNotificacion(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al conectar con el servidor');
      setNotificacion(true);
      setTimeout(() => {
        setNotificacion(false);
      }, 5000);
    }
  };

  return (
    <div className={styles.container}>
      {notificacion && <div className={styles.Notificacion}>{error}</div>}
      <div className="row">
        <div className="col-md-offset-5 col-md-4 text-center">
        {notificacion && <div className={styles.errormessage}>Correo ya existe</div>}
          <h1 className={styles.title}>Crear Cuenta</h1>
          <div className={styles['form-login']}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputs}>
                <div>
                  <label>
                    <input type="text" placeholder="NOMBRE" name="nombre" value={cliente.nombre} onChange={handleChange} required />
                  </label>
                </div>
                <div className='login'>
                  <label>
                    <input type="text" placeholder="APELLIDO" name="apellido" value={cliente.apellido} onChange={handleChange} required />
                  </label>
                </div>
                <div>
                  <label>
                    <input type="email" placeholder="CORREO" name="email" value={cliente.email} onChange={handleChange} required />
                  </label>
                </div>
                <div>
                  <label>
                    <input type="tel" placeholder="TELEFONO" name="telefono" value={cliente.telefono} onChange={handleChange} required />
                  </label>
                </div>
                <div>
                  <label>
                    <input type="text" placeholder="DIRECCION" name="direccion" value={cliente.direccion} onChange={handleChange} required />
                  </label>
                </div>
                <div>
                  <label>
                    <input type="password" placeholder="CONTRASEÑA" name="pwd" value={cliente.pwd} onChange={handleChange} required />
                  </label>
                </div>
              </div>
              <div className={styles.wrapper}>
                <button type="submit" className={`btn btn-danger btn-md`}>Login <i className="fa fa-sign-in"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCliente;
