import React , { Component } from 'react';


//crear el context 
const CategoriasContext = React.createContext()
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
    state = { categorias : [] }
    token = '4K7XPPR7PAMHWHWQ3WYG';
    componentDidMount(){
        this.getCategorias();
    }
    getCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        fetch(url).then(
            res => res.json()
        ).then(responseJSON => {
            const categories = responseJSON.categories;
            this.setState({
                categorias : categories
            })
        });
        
    }
    render() { 
        return ( 
            <CategoriasContext.Provider
              value = {{ 
                  categorias : this.state.categorias
              }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;