import React from 'react';
import Header from './Components/Header';
import contacto from '../Images/Icon/contacto.png';
import descarga from '../Images/Icon/descarga.png';
import select from '../Images/Icon/select2.png';
import styles from './CSS/Disenos.module.css';

const EmbeddedPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{width: '100%'}}>
        <Header />
      </div>
      <div>
        <h1 className={styles.imageDown}>Pasos para Hacer tu Idea de Diseño: </h1>
      </div>
      <div className={styles.Pasos}>
        <div
          style={{
            backgroundImage: `url(${select.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100px',
            height: '100px',
            left: '15%',
            position: 'absolute',
            top:'100px'
          }}>
        </div>
        <div className={styles.LCotizar}>
          <h1>1- Genera tu idea en la IA</h1>
          <p>tip-comienza tu peticion con</p>
          <p>Genera un diseño de tatauje de "tu idea"</p>
        </div>

        <div
          style={{
            backgroundImage: `url(${descarga.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100px',
            height: '100px', 
            left: '50%',
            position: 'absolute',
            top: '100px',
          }}>
        </div>
        <div className={styles.Lanticipo}>
          <h1>2- Si te gusto un diseño</h1>
          <p>Debajo de cada imagen se encuentra un boton</p>
          <p>donde puedes descargar la imagen que te convencio mas</p>
        </div>

        <div
          style={{
            backgroundImage: `url(${contacto.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100px',
            height: '100px', 
            left: '77%',
            position: 'absolute',
            top: '100px',
          }}>
        </div>
        <div className={styles.Lagenda}>
          <h1>3- Contacta al tatuador</h1>
          <p>Cuando tengas tu cita programada</p>
          <p>puedes contactar con tu tatuador y mostrarle tu imagen</p>
        </div>
      </div>
      <br />
      <br />
      <iframe src="https://www.fotor.com/images/create" width="100%" height="1000px" frameBorder={0}></iframe>
    </div>

  );
};

export default EmbeddedPage;
