import React from 'react';
import { NavLink } from "react-router-dom";

import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <div className="nav-bg holder">
            <nav className="navegacion">
                <a ><NavLink activeClassName="activo" exact to="/">Home</NavLink></a>
                <a ><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></a>
                <a ><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></a>
                <a ><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></a>
            </nav>
        </div>
    );
}


// import { Link } from "react-router-dom";
// const Nav = (props) => {
//     return (
//         <div className="nav-bg holder">
//             <nav className="navegacion">
//                 <a className="activo"><Link to="/">Home</Link></a>
//                 <a ><Link to="/nosotros">Nosotros</Link></a>
//                 <a ><Link to="/novedades">Novedades</Link></a>
//                 <a ><Link to="/contacto">Contacto</Link></a>
//             </nav>
//         </div>
//     );
// }

export default Nav;