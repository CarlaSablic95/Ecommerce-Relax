import outfitRock1 from './img/outfits-mujer/outfit-rock-1.jpg';
import outfitRock2 from './img/outfits-mujer/outfit-rock-2.jpg';
import outfitBoho1 from './img/outfits-mujer/outfit-boho-1.jpg';
import outfitBoho2 from './img/outfits-mujer/outfit-boho-2.jpg';
import outfitCasual1 from './img/outfits-mujer/outfit-casual-1.jpg';
import outfitCasual2 from './img/outfits-mujer/outfit-casual-2.jpg';

const OutfitsMujer = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 estilo-rock"></div>
              <div className="col-6 p-5">
                <h1 className="brittany py-4 text-center">Estilo Rock</h1>
                <h3 className="mb-5 text-center">Outfits propuestos</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="card">
                        <img src={outfitRock1} className="card-img-top" alt="outfit rockero" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #1</h5>
                          <a href="#" className="btn btn-primary">Ver productos</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                    <div className="card">
                        <img src={outfitRock2} className="card-img-top" alt="outfit rockero" />
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

        <div className="carousel-item">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 estilo-boho"></div>
              <div className="col-6 p-5">
                <h1 className="brittany py-4 text-center">Estilo Boho</h1>
                <h3 className="mb-5 text-center">Outfits propuestos</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="card">
                        <img src={outfitBoho1} className="card-img-top" alt="outfit boho" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #1</h5>
                          <a href="#" className="btn btn-primary">Ver productos</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                    <div className="card">
                        <img src={outfitBoho2} className="card-img-top" alt="outfit boho" />
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

        <div className="carousel-item">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 estilo-casual"></div>
              <div className="col-6 p-5">
                <h1 className="brittany py-4 text-center">Estilo Casual</h1>
                <h3 className="mb-5 text-center">Outfits propuestos</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="card">
                        <img src={outfitCasual1} className="card-img-top" alt="outfit casual" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #1</h5>
                          <a href="#" className="btn btn-primary">Ver productos</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                    <div className="card">
                        <img src={outfitCasual2} className="card-img-top" alt="outfit casual" />
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
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default OutfitsMujer;