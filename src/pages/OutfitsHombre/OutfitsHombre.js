import { Link } from 'react-router-dom';
import outfitRock1 from '../OutfitsHombre/img/outfit-rock-1.png';
import outfitRock2 from '../OutfitsHombre/img/outfit-rock-2.png';
import outfitUrbano1 from '../OutfitsHombre/img/outfit-urbano-1.jpg';
import outfitUrbano2 from '../OutfitsHombre/img/outfit-urbano-2.jpg';
import outfitCasualChic1 from '../OutfitsHombre/img/outfit-casual-chic-1.png';
import outfitCasualChic2 from '../OutfitsHombre/img/outfit-casual-chic-2.png';

const CarouselOutfitsHombre = () => {
      return (
        <div id="carouselExampleFadeOutfit" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 estilo-rock-hombre"></div>
                  <div className="col-6 p-5">
                    <h3 className="mb-5 text-center">Outfits propuestos:</h3>
                    <h2 className="brittany fs-1 pt-2 pb-4 text-center">Estilo Rocker</h2>
                    <div className="container">
                      <div className="d-flex gap-4">
                          <div className="card">
                            <img src={outfitRock1} className="card-img-top" alt="outfit rock" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #1</h5>
                              <Link to="/products" className="btn btn-primary">Ver productos</Link>
                            </div>
                          </div>
                        <div className="card">
                            <img src={outfitRock2} className="card-img-top" alt="outfit rock" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #2</h5>
                              <Link to="/products" className="btn btn-primary">Ver productos</Link>
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
                    <h3 className="mb-5 text-center">Outfits propuestos</h3>
                    <h2 className="brittany fs-1 py-4 text-center">Estilo Urban</h2>
                    <div className="container">
                      <div className="d-flex gap-4">
                          <div className="card">
                            <img src={outfitUrbano1} className="card-img-top" alt="outfit urbano" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #1</h5>
                              <Link to="/products" className="btn btn-primary">Ver productos</Link>
                            </div>
                          </div>
                        <div className="card">
                            <img src={outfitUrbano2} className="card-img-top" alt="outfit urbano" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #2</h5>
                              <Link to="/products" className="btn btn-primary">Ver productos</Link>
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
                    <h3 className="mb-5 text-center">Outfits propuestos</h3>
                    <h2 className="brittany fs-1 py-4 text-center">Estilo Urban Chic</h2>
                    <div className="container">
                      <div className="d-flex gap-4">
                          <div className="card">
                            <img src={outfitCasualChic1} className="card-img-top" alt="outfit casual chic" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #1</h5>
                              <Link to="/products" className="btn btn-primary">Ver productos</Link>
                            </div>
                          </div>
                        <div className="card">
                            <img src={outfitCasualChic2} className="card-img-top" alt="outfit casual chic" />
                            <div className="card-body text-center">
                              <h5 className="card-title text-center mb-4">Outfit #2</h5>
                              <Link to="/products" className="btn btn-primary">Ver productos</Link>
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