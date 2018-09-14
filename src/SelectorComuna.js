import React, { Component } from 'react';

class SelectorComuna extends React.Component {

    seleccionoComuna = comuna => {
        if (this.props.onChangeComuna) {
            this.props.onChangeComuna(comuna);
        }
    }

    mostrarComunas = () => {
        const comunas = [1, 2, 3, 4, 5, 6];
        return comunas.map(comuna => {
            return <li className="list-group-item " onClick={ () => this.seleccionoComuna(comuna) }>
                Comuna {comuna}
            </li>
        });
    }

    render() {
        return (
            <div className="container">
                <section className="jumbotron text-center mt-4">
                    <h1 className="jumbotron-heading">
                        <font style={{verticalAlign:'inherit' }}>
                            <font style={{verticalAlign:'inherit' }}>Elija la comuna </font>
                        </font>
                    </h1>
                    <p className="lead text-muted">
                        <font style={{verticalAlign:'inherit' }}>
                            <font style={{verticalAlign:'inherit' }}>Seleccione una comuna para poder mostrar el listado de farmacias</font>
                        </font>
                    </p>
                    <ul className="list-group list-group-flush">
                        { this.mostrarComunas() }
                    </ul>
           
                </section>
            </div>
        )
    }
}
export default SelectorComuna;