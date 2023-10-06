import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="portada position-relative"></section>

            <section className="p-4 p-md-5 pb-3">
                <div className="p-4 p-md-5 mb-5 border position-relative w-75 mx-auto">
                    <h3 className="brittany titulo-nosotros position-absolute text-dark p-2">Sobre <span className="fst-italic">nosotros</span></h3>
                    <div>
                        <p>Somos <strong>Relax</strong>, una marca rosarina de moda que se enorgullece de ofrecer indumentaria femenina y masculina de alta calidad. Nuestro compromiso es con nuestros clientes, y nos esforzamos por garantizar su satisfacción en cada compra.</p>
                    </div>
               
                    <div className="position-relative">
                    <h3 className="brittany titulo-nosotros text-dark p-2 w-25 text-center">Misión</h3>
                        <p>El nombre "Relax" refleja nuestra misión: queremos que tu experiencia de compra sea un momento de relajación. Sabemos que comprar ropa online puede ser un desafío, especialmente cuando estás buscando el estilo perfecto que se adapte a tus gustos y personalidad.</p>
                    </div>

                    <div>
                    <h3 className="brittany titulo-nosotros text-dark p-2 w-25 text-center">Propuesta</h3>
                        <p>Para hacer tu experiencia de compra más placentera, hemos colaborado con los mejores asesores de moda del país para ofrecerte una variedad de outfits prearmados para diferentes estilos. Nuestro objetivo es que disfrutes al máximo tu experiencia de compra, sin la necesidad de preocuparte por encontrar el outfit perfecto. Con Relax, la moda está al alcance de tus manos.</p>
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