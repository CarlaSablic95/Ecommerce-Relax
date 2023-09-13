const Login = () => {
    return (
        <section className="py-5 my-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="card p-4">
                                <h4 className="text-center mb-4">
                                    <i className="bi bi-key bg-beige rounded-circle"></i>Crear cuenta</h4>
                                    <form action="" id="form-registro">
                                        <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="nombre" placeholder="name@example.com" />
                                        <label for="nombre">Nombre<span className="text-danger">*</span></label>
                                      </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="email-reg" placeholder="name@example.com" />
                                            <label for="email-reg">Email<span className="text-danger">*</span></label>
                                          </div>
                                          <div className="form-floating mb-4">
                                            <input type="password" className="form-control" id="pass-reg" placeholder="contrasenia" />
                                            <label for="passReg">Contraseña<span className="text-danger">*</span></label>
                                        </div>
                                        <span id="mensaje-error" className="my-5 mensaje-error"></span>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary border-0">Registrarme</button>
                                        </div>
                                        <span className="mensaje-error"></span>
                                    </form>
                            </div>
                        </div>

                    </div>
                </div>
        </section>
    )
}

export default Login;