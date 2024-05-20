import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Image from 'next/image';
import idea from '../Images/Log/idea.jpeg';

interface User {
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('./api/Autenticacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
  
      const data = await response.json();
      window.location.href = data.redirect;
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${idea.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        justifyContent: 'center',
      }}
    >
      {/* Div para blur */}
      <div
        className="d-flex align-items-center justify-content-center border-4 !important"
        style={{
          height: '500px',
          width: '700px',
          backdropFilter: 'blur(5px)',
          padding: '20px',
          zIndex: 1,
          borderRadius: '15px',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* Div contiene a los dos campos Login y Registro */}
      <div
        className="d-flex align-items-center justify-content-center border-4 !important"
        style={{
          minHeight: '100vh',
          maxHeight: '200px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        {/* Div solo para la mitad de Bienvenido */}
        <div className="Login flex-column p-3">
          <div className="information">
            <div className="info-childs">
              <h2 style={{ fontSize: '50px', fontFamily: 'Gothic', color: 'black', textAlign: 'center' }}>
                Bienvenido
              </h2>
              <p>Para unirte a nuestra comunidad, inicia sesión con tus datos</p>
              {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
              <form onSubmit={handleSubmit} className="form">
                <div className="mb-3" style={{ textAlign: 'center' }}>
                  <label>
                    <i className="bx bx-envelope"></i>
                    <input
                      type="email"
                      placeholder="Correo electronico"
                      className="form-control"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="mb-3" style={{ textAlign: 'center' }}>
                  <label>
                    <i className="bx bx-lock-alt"></i>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="form-control"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary" style={{ display: 'block', margin: 'auto' }}>
                  Iniciar sesión
                </button>
                <br />
                <p style={{ textAlign: 'center', color: 'white' }}>
                  ¿No tienes una cuenta?{' '}
                  <Link href="/crearcuenta" passHref>
                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Crear una aquí</span>
                  </Link>
                </p>
                <br />
                <p style={{ textAlign: 'center' }}>
                  <Link href="/ScrollInvitado" passHref>
                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Entrar como invitado</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
