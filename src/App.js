import React from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';
import Buscador from './components/Buscador';
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';


function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
          <Header/>
          <div className="uk-container">
            <Buscador />
            <ListaEventos/>
          </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
