import { Link, NavLink } from 'react-router-dom';

const routes = [
    {
        path: '/',
        name:""
},
{},
{}]

import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container">
                    <a className="navbar-brand ms-4" href="/">
                    <h1 className="brittany pt-4">Relax</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center ms-lg-5">
                    <li className="nav-item me-2 text-center">
                                <a className="nav-link" href="/">Productos</a>
                            </li>
                        <li className="nav-item dropdown text-center">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mujer
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item text-center" href="/">Ver outfits</a></li>
                        </ul>
                        </li>
                        
                        <li className="nav-item dropdown text-center">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hombre
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item text-center" href="/">Ver outfits</a></li>
                        </ul>
                        </li>
                        
                            <li className="nav-item me-2 text-center">
                                <a className="nav-link" href="/">FAQ</a>
                            </li>
                            </ul>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item me-2 text-center">
                                <a className="nav-link" href="/"><i className="bi bi-person fs-4"></i></a>
                            </li>
                            <CartWidget></CartWidget>
                    </ul>
                    </div>
                </div>
{/* LINK = <a> en html*/}
{/* to = href en html*/}
                {routes.map((route) => {
                    
                    <NavLink className to={route.path}>{route.name}</NavLink>
                })}
            </nav>
    )
}

export default NavBar;