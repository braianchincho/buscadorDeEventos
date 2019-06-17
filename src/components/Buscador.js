import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext'
import { EventosConsumer } from '../context/EventosContext';
class Buscador extends Component {
    state = { nombre: '', categoria: '' }
    // si el usuario agrega un evento
    setEventValue = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    return (
                    <form onSubmit = {(e) => {
                        e.preventDefault();
                        value.obtenerEventos(this.state);
                    }}>
                        <fieldset className="uk-fieldset uk-mergin">
                            <legend className="uk-legend uk-text-center">
                                Busca tu evento por Nombre o Categoría
                    </legend>
                        </fieldset>
                        <div className="uk-column-1-3@m uk-margin">
                            <div className="uk-margin" uk-margin="true">
                                <input
                                    name="nombre"
                                    className="uk-input"
                                    type="text"
                                    placeholder="Nombre de Evento o Ciudad"
                                    onChange={this.setEventValue}
                                />
                            </div>
                            <div className="uk-margin" uk-margin="true">
                                <select className="uk-select"
                                    name="categoria"
                                    onChange={this.setEventValue}
                                >
                                    <option value="">--Seleccione una categoria--</option>
                                    <CategoriasConsumer>
                                        {(value) => {
                                            return (
                                                value.categorias.map(categoria => {
                                                    return (
                                                        <option value={categoria.id} key={categoria.id}>
                                                            {categoria.name_localized}

                                                        </option>
                                                    )
                                                })
                                            )
                                        }}
                                    </CategoriasConsumer>
                                </select>
                            </div>
                            <div>
                                <input type="submit" className="uk-button uk-button-danger" value="Buscar" />
                            </div>
                        </div>
                    </form>
                    )}}
            </EventosConsumer>

        );
    }
}

export default Buscador;