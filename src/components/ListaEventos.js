import React from 'react';
import { EventosConsumer } from '../context/EventosContext';
import Evento from './Evento';

const ListaEventos = () => {
    return (
     <div className="uk-child-width-1-3@m" uk-grid="true">
         <EventosConsumer>
          {(value) => {
              const eventos = value.eventos || [];
              return eventos.map(evento => (
                <Evento evento={evento} key={evento.id}/>
              ))
          }}
         </EventosConsumer>

    </div>);
}
 
export default ListaEventos;