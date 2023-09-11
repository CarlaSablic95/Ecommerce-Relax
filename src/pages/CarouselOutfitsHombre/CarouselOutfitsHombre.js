
const CarouselOutfitsHombre = () => {
      return (
        <div id="carouselExampleFadeOutfit" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 estilo-rock-hombre"></div>
                  <div className="col-6 p-5">
                    <h2 className="brittany fs-1 py-4 text-center">Rock</h2>
                    <h3 className="mb-5 text-center">Outfits propuestos</h3>
                    <div className="container">
                      <div className="d-flex gap-4">
                          <div className="card">
                            <img src="" className="card-img-top" alt="outfit rock" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #1</h5>
                              <a href="#" className="btn btn-primary">Ver productos</a>
                            </div>
                          </div>
                        <div className="card">
                            <img src="" className="card-img-top" alt="outfit rock" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #2</h5>
                              <a href="#" className="btn btn-primary">Ver productos</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 estilo-urbano"></div>
                  <div className="col-6 p-5">
                    <h2 className="brittany fs-1 py-4 text-center">Urbano</h2>
                    <h3 className="mb-5 text-center">Outfits propuestos</h3>
                    <div className="container">
                      <div className="d-flex gap-4">
                          <div className="card">
                            <img src="" className="card-img-top" alt="outfit urbano" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #1</h5>
                              <a href="#" className="btn btn-primary">Ver productos</a>
                            </div>
                          </div>
                        <div className="card">
                            <img src="" className="card-img-top" alt="outfit urbano" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #2</h5>
                              <a href="#" className="btn btn-primary">Ver productos</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 estilo-chic"></div>
                  <div className="col-6 p-5">
                    <h2 className="brittany fs-1 py-4 text-center">Urban Chic</h2>
                    <h3 className="mb-5 text-center">Outfits propuestos</h3>
                    <div className="container">
                      <div className="d-flex gap-4">
                          <div className="card">
                            <img src="" className="card-img-top" alt="outfit casual" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #1</h5>
                              <a href="#" className="btn btn-primary">Ver productos</a>
                            </div>
                          </div>
                        <div className="card">
                            <img src="" className="card-img-top" alt="outfit casual" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #2</h5>
                              <a href="#" className="btn btn-primary">Ver productos</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFadeOutfit" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFadeOutfit" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
        </div>
    )
}

export default CarouselOutfitsHombre;