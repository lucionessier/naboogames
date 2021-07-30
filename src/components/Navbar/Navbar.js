// En este caso importo en el componente Navbar los componentes Button y los MenuItems que van a ser insertados en el Nav

import React, { Component } from 'react';
import { Button } from "./Button";
import { MenuItems } from './MenuItems';
import './Navbar.css'


class Navbar extends Component {
    
    state = { clicked: false }

    handleClick = () => {
        this.setState ({ clicked: !this.state.clicked})
    }
    
    // En este caso, renderizo lo que sería el Menú de la app con sus items, con su logo y un ternario que indica que si está clickeado, muestra un icon de fontawesome, y si no, muestra las barras, también de Fontawesome. Esto previamente definido con un state más arriba. Luego renderizo los LI del UL con un .map, a partir de un array de objetos definido en MenuItems.

    render() {
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">NabooGames<i className="fas fa-jedi"></i></h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                
                            </li>
                        )
                    })}

                </ul>
                <Button><i className="fas fa-shopping-cart"></i></Button>
            </nav>
        )
    }
}

export default Navbar;