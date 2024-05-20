import Header from './Components/Header';
import React from 'react';
import back from '../Images/Log/back.jpeg';
import lettering from '../Images/Log/scroll.jpeg';
import Style from './CSS/InImage.module.css';
import div from './CSS/div.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const Scroll: React.FC = () => {

  useEffect(() => {
    const loadMap = () => {
      if (window.google) {
        // elemento del mapa
        const mapElement = document.getElementById('map');

        // API de Google Maps
        const map = new window.google.maps.Map(mapElement, {
          center: { lat: 20.685860113247866, lng: -103.30936094603679 },
          zoom: 17,
        });

        // ubicación específica
        const marker = new window.google.maps.Marker({
          position: { lat: 20.685860113247866, lng: -103.30936094603679 },
          map: map,
          title: 'Mi ubicación',
        });
      } else {
        setTimeout(loadMap, 100);
      }
    };

    loadMap();
  }, []);

  return (
    <div className='AllPage'>
      <div
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          justifyContent: 'center',
          height: '1080px',
        }}
      >
        <Header />

        <div className={Style.container}>
          <h1>Ver Citas</h1>
          <Link href="/VerCitas" passHref>
            <button className={Style.button}>Mira tus citas</button>
          </Link>
        </div>

      </div>

      <div className={div.container}>
        <div className={div.text}>
          <p>New Era Tattoo</p>
          <p>Somos un ESTUDIO DE TATUAJES en la colonia Juen de Dios Robledo, GDL, México.</p>
          <p>Hacemos tatuajes únicos, ejecutados con un alto nivel técnico y de calidad.</p>
          <p>Defendemos la libertad artística, promovemos la diversidad y valoramos la conexión humana.</p>
          <p>Nuestros artistas son elegidos por su arte, estilo y técnica, cada uno con diferentes especialidades, que va desde lo tradicional y bold, a la línea fina, black work, realismo, geométrico y lettering. </p>
        </div>
        <div 
          style={{
            backgroundImage: `url(${lettering.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '400px',
            width: '400px',
            flex: 1,
          }}
        >
           
        </div>
      </div>

      <div className='AllPage'>
        <div id="map" style={{ width: '100%', height: '800px' }}></div>
      </div>
    </div>
  );
};

export default Scroll;