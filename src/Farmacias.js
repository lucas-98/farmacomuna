// ts-lint
import React, { Component } from 'react';

class Farmacias extends Component {

    state = {
        todasFarmacias: []
    }

    constructor() {
        super();
        fetch("./datos/farma24.json").then(res => res.json() )
            .then(farmacias => {
                this.setState({
                    todasFarmacias: farmacias
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <section className="jumbotron text-center mt-4">
                        <h2 className=" jumbotro-heading">Farmacias de la Comuna { this.props.comuna }</h2>
                        <p className="lead text-muted">
                            <font style={{verticalAlign:'inherit' }}>
                                <font style={{verticalAlign:'inherit' }}>A esta comuna pertenecen las siguientes farmacias</font>
                            </font>
                        </p>
                        <ul  className="list-group ">
                        {
                            this.state.todasFarmacias
                                .filter(f=>f.comuna==this.props.comuna)
                                .map( f => (
                                    <li className="list-group-item">{ f.nombre } - { f.direccion }</li>
                                ))
                        }
                        </ul>
                    </section>
                </div>

               
            </React.Fragment>
        )
    }
}

export default Farmacias;