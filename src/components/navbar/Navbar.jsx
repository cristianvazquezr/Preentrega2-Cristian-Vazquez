import './NavBar.css'
import logo from '../images/Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import CartWidgetMenu from '../CartWidget/CartWidgetMenu';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {cardContextP} from '../Context/CartContext';




function Navbar(){

    let {amountCart}=useContext(cardContextP)
    return(
        <header className="container">
            {/* <!--Cuando la pantalla es mayor a 920px uso menu desplegado--> */}
            <div className="row encabezado animate__animated animate__slideInDown">
                <div className="col-2 logo-encabezado">
                    <Link to="/"><img className="logo" src={logo} alt="Logo del mejor lugar de comidas"/></Link>
                </div>
                <div className="col-10">
                    <nav className="barra_navegacion">
                        <ul className="nav nav-tabs navegacion">
                            <li className="nav-item nav_links">
                                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item nav_links dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Productos</Link>
                                <ul className="dropdown-menu submenu-productos">
                                    <li className="nav_links"><Link className="dropdown-item" to="/category/Carnes">Carnes</Link></li>
                                    <li className="nav_links"><Link className="dropdown-item" to="/category/Vegetariano">Vegetariano</Link></li>
                                    <li className="nav_links"><Link className="dropdown-item" to="/category/Pastas">Pastas</Link></li>
                                    <li className="nav_links"><Link className="dropdown-item" to="/category/Comida rapida">Comida rápida</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item nav_links">
                                <a className="nav-link" href="#footer">Contacto</a>
                            </li>
                        </ul>
                        
                        <CartWidget className_Cart="cartWidget" className='links_iconos' valorCarrito={amountCart}></CartWidget>
                    </nav>
                    <hr />
                </div>    
            </div> 

            {/* Cuando la pantalla es menor a 920px uso menu hamburguesa */}
            <nav className="navbar navbar-light menuHamburguesa">
                <div className="container-fluid">
                    <div className="col-2 logo-encabezado">
                        <Link to="/"><img className="logo" src={logo} alt="Logo del mejor lugar de comidas"/></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="logo-encabezado">
                            <Link to="#"><img className="logo-MH" src={logo} alt="Logo del mejor lugar de comidas"/></Link>
                        </div>
                        <div className='CardWidget-MH'>
                            <CartWidgetMenu className_Cart="cartWidget" className='links_iconos' valorCarrito={amountCart}></CartWidgetMenu>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="offcanvas-body">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li><Link className="dropdown-item" to="/category/Carnes">Carnes</Link></li>
                                    <li><Link className="dropdown-item" to="/category/Vegetariano">Vegetariano</Link></li>
                                    <li><Link className="dropdown-item" to="/category/Pastas">Pastas</Link></li>
                                    <li><Link className="dropdown-item" to="/category/Comida rapida">Comida rápida</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </header>

        
    )
}


export default Navbar