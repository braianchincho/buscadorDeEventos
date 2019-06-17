import React from 'react';
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;
class EventosProvider extends React.Component {
    state = { 
        eventos:[]
     }
    token = '4K7XPPR7PAMHWHWQ3WYG';
    obtenerEventos =  (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es_ES`
        
        fetch(url).then(res => res.json()).then(
            res => {
                this.setState({eventos:res.events})
            }
        )
    }
    render() { 
        return ( 
            <EventosContext.Provider
                value = {{ eventos : this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}   
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;