import { useState, FormEvent } from 'react';
import axios from 'axios';
import styles from './CSS/AgendarCitaForm.module.css';
import Header from './Components/Header';
import lettering from '../Images/Log/Lettering.jpeg';
import teclado from '../Images/Icon/teclado.png';
import dinero from '../Images/Icon/dinero.png';
import agenda from '../Images/Icon/lista.png';

const AgendarCitaForm = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [color, setColor] = useState('');
  const [telefono, setTelefono] = useState('');
  const [parteCuerpo, setParteCuerpo] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post('./api/AgendaCita', {
        fecha,
        hora,
        Descripcion,
        color,
        telefono,
        parteCuerpo,
        tamaño,
      });
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Header />
      </div>
      <div
        style={{
          backgroundImage: `url(${lettering.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '700px',
          width: '1100px',
          margin: '0 auto',
        }}>
      </div>
      <div>
        <h1 className={styles.imageDown}>Pasos para Agendar una Cita: </h1>
      </div>
      <div className={styles.Pasos}>
        <div
          style={{
            backgroundImage: `url(${teclado.src})`,
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
          <h1>1- Cotiza tu tatuaje</h1>
          <p>contacta con tu tatuador que mas te haya gustado</p>
          <p>para ver el costo de tu tatuje</p>
        </div>

        <div
          style={{
            backgroundImage: `url(${dinero.src})`,
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
          <h1>2- Haz tu anticipo</h1>
          <p>Haz un anticipo de la mutad del precio dado por</p>
          <p> tu tautador</p>
        </div>

        <div
          style={{
            backgroundImage: `url(${agenda.src})`,
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
          <h1>3- Agenda tu Cita</h1>
          <p>Escoge el dia y hora de que prefieras</p>
        </div>

      </div>
      <br />
      <div className={styles.container}>
        <h2 style={{fontSize: '50px', fontFamily: 'cursive'}}>LLena el siguinete formulario y cotizaremos tu tauaje</h2>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            
            <div style={{width:'400px'}}>
              <label>Fecha:</label>
              <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
            </div>
            <br/>

            <div style={{width:'400px'}}>
              <label>Hora:</label>
              <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
            </div>
            <br/>

            <div style={{width:'400px'}}>
              <label>Telefono</label>
              <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
            <br/>

            <div style={{width:'400px'}}>
              <label>Tamaño:</label>
              <select value={tamaño} onChange={(e) => setTamaño(e.target.value)} required>
                <option value="">Selecciona tamaño</option>
                <option value="pequeño">1-5cm</option>
                <option value="pequeño-mediano">5-10cm</option>
                <option value="mediano">10-15cm</option>
                <option value="mediano-grande">15-20cm</option>
                <option value="grande">20-30cm</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <br/>

            <div style={{width:'400px'}}>
              <label>Parte del Cuerpo:</label>
              <select value={parteCuerpo} onChange={(e) => setParteCuerpo(e.target.value)} required>
                <option value="">Selecciona una parte</option>
                <option value="Brazo">Brazo</option>
                <option value="Ante-Brazo">Ante-Brazo</option>
                <option value="Pierna">Pierna</option>
                <option value="Pecho">Pecho</option>
                <option value="Espalda">Espalda</option>
                <option value="Abdomen">Abdomen</option>
                <option value="Mano">Mano</option>
                <option value="Hombro">Hombro</option>
                <option value="Rodilla">Rodilla</option>
                <option value="Cuello">Cuello</option>
                <option value="Rodilla">Clavícula</option>
                <option value="Cuello">Cuello</option>
              </select>
            </div>
            <br/>

            <div style={{width:'400px'}}>
              <label>Color o Negro?:</label>
              <select value={color} onChange={(e) => setColor(e.target.value)} required>
                <option value="">Selecciona</option>
                <option value="Color">A Color</option>
                <option value="Negro">Negro</option>
                <option value="Indeciso">Indeciso</option>
              </select>
            </div>
            <br/>

            <div style={{width:'500px'}}>
              <label>Descripcion:</label>
              <input type="text" value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </div>
            <br/>
 
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <button type="submit" style={{backgroundColor:'white', color:'black', width:'400px',
             position: 'relative', left: '180px', border: '1px solid'
            }}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgendarCitaForm;
