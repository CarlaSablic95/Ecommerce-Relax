const Faq = () => {
    return (
        <section className="py-5 seccion">
            <div className="container">
                <h2 className="text-center mb-5">Preguntas frecuentes <i className="bi bi-patch-question-fill"></i></h2>
                {/* FAQ 1 */}
                <p className="mb-0">
                    <a className="btn btn-primary w-50 mx-auto d-block collapsed" data-bs-toggle="collapse" href="#faq-1" role="button" aria-expanded="false" aria-controls="faq-1">
                        ¿Por qué comprar en Relax?
                    </a>
                  </p>
                  <div className="collapse w-50 mx-auto" id="faq-1">
                    <div className="card card-body mb-5">
                        <p><i className="bi bi-star-fill"></i> Nuestro ecommerce se especializa en mostrar outfits prearmados de distintos estilos para hombres y mujeres. Para esto, trabajamos junto a reconocidos asesores de moda del país. Además, podés comprar los productos que conforman cada outfit directamente desde nuestra página.
                    </p></div>
                  </div>

                  {/* FAQ 2 */}
                  <p className="mb-0">
                    <a className="btn btn-primary w-50 mx-auto d-block" data-bs-toggle="collapse" href="#faq-2" role="button" aria-expanded="false" aria-controls="faq-2">
                        ¿Puedo comprar un outfit?
                    </a>
                  </p>
                  <div className="collapse w-50 mx-auto" id="faq-2">
                    <div className="card card-body mb-5">
                        <p><i className="bi bi-star-fill"></i> No es necesario comprar todo el outfit completo. En cambio, podés elegir comprar solo una o algunas de las prendas que conforman el outfit. Cada producto que forma parte del outfit está disponible para su compra individual, lo que te permite personalizar tu compra según tus necesidades y preferencias.</p>
                    </div>
                  </div>

                   {/* FAQ 3 */}
                  <p className="mb-0">
                    <a className="btn btn-primary w-50 mx-auto d-block" data-bs-toggle="collapse" href="#faq-3" role="button" aria-expanded="false" aria-controls="faq-3">
                        ¿Cuáles son las formas de pago disponibles?
                    </a>
                  </p>
                  <div className="collapse w-50 mx-auto" id="faq-3">
                    <div className="card card-body mb-5">
                       <p><i className="bi bi-star-fill"></i> Aceptamos diversas formas de pago, incluyendo tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo.</p>
                    </div>
                  </div>

                   {/* FAQ 4 */}
                  <p className="mb-0">
                    <a className="btn btn-primary w-50 mx-auto d-block" data-bs-toggle="collapse" href="#faq-4" role="button" aria-expanded="false" aria-controls="faq-4">
                        ¿Necesito estar registrado para comprar?
                    </a>
                  </p>
                  <div className="collapse w-50 mx-auto" id="faq-4">
                    <div className="card card-body mb-5">
                        <p><i className="bi bi-star-fill"></i> Sí, es necesario estar registrado. Pero una vez que guardás tus datos se agilizará el proceso en tus próximas compras.</p>
                    </div>
                  </div>

                   {/* FAQ 5 */}
                  <p className="mb-0">
                    <a className="btn btn-primary w-50 mx-auto d-block collapsed" data-bs-toggle="collapse" href="#faq-5" role="button" aria-expanded="false" aria-controls="faq-5">
                        ¿Realizan envíos a todo el país?
                    </a>
                  </p>
                  <div className="collapse w-50 mx-auto" id="faq-5">
                    <div className="card card-body mb-5">
                        <p><i className="bi bi-star-fill"></i> Sí, realizamos envíos a todo el país. Los costos y tiempos de envío varían según la ubicación.</p>
                    </div>
                  </div>

                   {/* FAQ 6 */}
                  <p className="mb-0">
                    <a className="btn btn-primary w-50 mx-auto d-block collapsed" data-bs-toggle="collapse" href="#faq-6" role="button" aria-expanded="false" aria-controls="faq-6">
                        ¿Puedo devolver o cambiar un producto?
                    </a>
                  </p>
                  <div className="collapse w-50 mx-auto" id="faq-6">
                    <div className="card card-body mb-5">
                        <p><i className="bi bi-star-fill"></i> Sí, podés devolver o cambiar un producto dentro de los primeros 14 días desde la fecha de recepción del mismo.</p>
                    </div>
                  </div>
            </div>
        </section>
    )
}

export default Faq;