import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const routes = [
    {
        path: '/',
        link: 'Home'
    },

    {
        path: '/products',
        link: 'Productos'
    },
    {
        path: '/category/mujer',
        link: 'Mujer'
    },
    {
        path: '/category/hombre',
        link: 'Hombre'
    },
    {
        path: '/faq',
        link: 'FAQ'
    }
]

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand ms-4" to="/">
                    <h1 className="brittany pt-4">Relax</h1>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        { routes.map((route) => (
                            <NavLink key={route.path} to={route.path} className={({isActive}) => `${isActive ? 'active' : ''} mb-3 mb-lg-0 mx-4 text-decoration-none nav-item me-2 text-dark text-center`}>
                            {route.link}</NavLink>
                        ))}
                    </ul>
                        <ul className="navbar-nav align-items-center">
                            <CartWidget></CartWidget>
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;