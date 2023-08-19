import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src='./logo.png' className='rounded-circle w-25'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown d-flex align-items-center mx-2">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mujer
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item text-center" href="/">Ver outfits</a></li>
                        <li><a className="dropdown-item text-center" href="/">Ver productos</a></li>
                    </ul>
                    </li>
                    
                    <li className="nav-item dropdown d-flex align-items-center mx-2">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hombre
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item text-center" href="/">Ver outfits</a></li>
                        <li><a className="dropdown-item text-center" href="/">Ver productos</a></li>
                    </ul>
                    </li>
                    <li className="nav-item me-2">
                        <a className="nav-link" href="/"><i className="bi bi-person fs-4"></i></a>
                    </li> 
                    <CartWidget></CartWidget>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;