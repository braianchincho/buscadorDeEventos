import React from 'react';
const Evento = ({evento}) => {
    let text = evento.description.text;
    if(text && text.length > 250 ){
        text = text.substr(0,250) + ' ...';
    }
    return ( 
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                {evento.logo ?
                  <img src={evento.logo.url} alt={evento.name}/>
                  :null
                }
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{evento.name.text}</h3>
                 <p>{text}</p>   
            </div>
            <div className="uk-card-foorer">
                <a href={evento.url} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-secondary">
                    Más información
                </a>
            </div>
            <br/>
        </div>
    );
}
 
export default Evento;