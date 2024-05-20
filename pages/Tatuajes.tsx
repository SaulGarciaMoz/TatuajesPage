import React from 'react';
import Header from './Components/Header';
import styles from './CSS/Tatuajes.module.css';
import Aguila from '../Images/Aguila.jpg';
import Angel from '../Images/Angel.jpg';
import Araña from '../Images/Araña.jpg';
import Arcangel from '../Images/Arcangel.jpg';
import Calavera from '../Images/Calavera.jpg';
import Cartas from '../Images/Cartas.jpg';
import Demon from '../Images/Demon.jpg';
import Diseño from '../Images/Diseño.jpg';
import Diseño1 from '../Images/Diseño1.jpg';
import Diseño2 from '../Images/Diseño2.jpg';
import Diseño3 from '../Images/Diseño3.jpg';
import Dragon from '../Images/Dragon.jpg';
import Flores from '../Images/Flores.jpg';
import Japo from '../Images/japones.jpg';
import Japo2 from '../Images/japones2.jpg';
import Neo from '../Images/Neo.Tradicional.jpg';
import Oso from '../Images/oso.jpg';
import Pulpo from '../Images/Pulpo.jpg';
import Rosa from '../Images/Rosa.jpg';
import Rostro from '../Images/Rostro.jpg';
import Serpiente from '../Images/Serpiente.jpg';
import Soldado from '../Images/Soldado.jpg';
import Telaraña from '../Images/Telaraña.jpg';
import Tiempo from '../Images/Tiempo.jpg';
import Trival from '../Images/Trival.jpg';

const TatuajesPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Aguila.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de águila</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Angel.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de ángel</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Araña.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Araña</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Arcangel.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Arcangel</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Calavera.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Calavera</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Cartas.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Cartas</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Demon.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Demonio</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Diseño.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Boceto</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Diseño1.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Boceto</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Diseño2.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Boceto</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Diseño3.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Boceto</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Dragon.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Dragon</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Flores.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Flores</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Japo.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Japones</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Japo2.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Japones</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Neo.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Neo-Tradicional</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Oso.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Oso</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Pulpo.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Pulpo</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Rosa.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Rosa</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Rostro.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Rostro</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Serpiente.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Serpiente</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Soldado.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Soldado</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Telaraña.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1000</p>
            <p>Descripción: Tatuaje de Telaraña</p>
          </div>

          <div
            style={{
              backgroundImage: `url(${Tiempo.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Tiempo</p>
          </div>
        </div>

        <div className={styles.Tres}>
          <div
            style={{
              backgroundImage: `url(${Trival.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              marginRight: '60px',
            }}
          >
            <p>Precio: $1200</p>
            <p>Descripción: Tatuaje de Trival</p>
          </div>

          
        </div>

      </div>
    </div>
  );
};

export default TatuajesPage;
