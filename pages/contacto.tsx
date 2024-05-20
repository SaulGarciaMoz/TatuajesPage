import React from 'react';
import Header from './Components/Header'; 
import styles from './CSS/Contacto.module.css';
import Neri from './../Images/Tatuadores/Neri.jpg'

const ContactoPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
      <div
            style={{
              backgroundImage: `url(${Neri.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Alonso Neri: 3328716256</p>
        </div>
        </div>
    </div>
  );
};

export default ContactoPage;
