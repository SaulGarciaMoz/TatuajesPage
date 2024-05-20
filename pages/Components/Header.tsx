import React from 'react';
import styles from '../CSS/Header.module.css'; 
import Image from 'next/image';
import facebook from '../../Images/Icon/facebook.png'
import instafram from '../../Images/Icon/instagram.png'
import usr from '../../Images/Icon/usuario.png'

const Header: React.FC = () => {
  const handleNavigation = (route: string) => {
    // Redirigir a la ruta deseada
    window.location.href = route;
  };

  return (
    
    <header className={styles.header} >
      <div className={styles.title}>New Era Tattoo</div>
      <br/>
     <div className={styles.redesContainer}>
     <a href="https://www.facebook.com/newerainkcitas?locale=es_LA" target="_blank" className={styles.redesLink}>
     <div className={styles.redesIcon} style={{ backgroundImage: `url(${facebook.src})` }}></div>
    </a>
    <a href="https://www.instagram.com/neweratattoostudio_jc/" target="_blank" className={styles.redesLink}>
     <div className={styles.redesIcon} style={{ backgroundImage: `url(${instafram.src})` }}></div>
    </a>
    <a href="https://www.facebook.com/newerainkcitas?locale=es_LA" target="_blank" className={styles.redesLink}>
     <div className={styles.redesIcon} style={{ backgroundImage: `url(${usr.src})` }}></div>
    </a>
     </div>

      <div className={styles.box}>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarOpt} onClick={() => handleNavigation('/Scroll')}>
              <span className={styles.navbarLink}>Inicio</span>
            </li>
            <li className={styles.navbarOpt} onClick={() => handleNavigation('/Tatuajes')}>
              <span className={styles.navbarLink}>Tattoos</span>
            </li>
            <li className={styles.navbarOpt} onClick={() => handleNavigation('/Disenos')}>
              <span className={styles.navbarLink}>Diseños</span>
            </li>
            <li className={styles.navbarOpt} onClick={() => handleNavigation('/contacto')}>
              <span className={styles.navbarLink}>Contacto</span>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;
