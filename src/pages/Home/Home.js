import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="portada position-relative"></section>
            <section className="seccion-nosotros text-white d-flex justify-content-center p-4 p-md-5">
                <div className="col-11 col-md-9 col-lg-6 p-4 p-md-5 border position-relative">
                    <h3 className="brittany titulo-nosotros position-absolute text-dark p-2">Sobre <span className="fst-italic">nosotros</span></h3>
                    <div>
                        <p>Somos <strong>Relax</strong>, una empresa rosarina de indumentaria femenina y masculina dedicada exclusivamente a nuestros clientes. </p>
                        <h3 className="brittany titulo-nosotros position-absolute text-dark p-2">Sobre <span className="fst-italic">nosotros</span></h3>
                        <p>Nuestro nombre proviene de nuestra <strong>misión</strong>, que es lograr que nuestros clientes tengan su <strong>momento de relax</strong> al comprar ropa en nuestro sitio web. Comprar online requiere de mucho tiempo sobre todo si no estás seguro/a de cuál es el estilo indicado para vos, y que sea acorde a tus gustos y personalidad.</p>
                        <p>Por esto, proponemos junto a los mejores asesores de moda del país, una amplia variedad de outfits prearmados de distintos estilos, para que sólo te ocupes de disfrutar a la hora de comprar.</p>
                    </div>
                </div>
            </section>
            <section className="text-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 outfits-mujer d-flex justify-content-center align-items-center">
                            <Link to="/outfits-mujer" className="btn btn-lg btn-dark">Ver Outfits</Link>
                        </div>
                        <div className="col-12 col-md-6 outfits-hombre d-flex justify-content-center align-items-center">
                            <Link to="/outfits-hombre" className="btn btn-lg btn-light">Ver Outfits</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )



}

export default Home;