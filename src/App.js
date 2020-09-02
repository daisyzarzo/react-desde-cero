import React from 'react';
// import logo from './logo.svg';
import './styles/styles.scss';

//Reglas JSX
// 1 : todas las etiquetas deben cerrarse
// 2: los componentes deben devolver un solo elemento paddre
// 3: apoyarse de los fragmentso cuando necesito devolver 2 eelementos
// 4: Fragment  =>  <> hijos </>



const App = () => (
  <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="" alt="imagen" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Titulo del banner</p>
          <p>Subtitulo del banner</p>
          <a href="#" className="button">Boton del banner</a>
        </div>
      </div>
    </div>
  </div>
);
export default App;
