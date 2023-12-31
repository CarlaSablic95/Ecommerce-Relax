import outfitRock1 from './img/outfit-rock-1.png';
import outfitRock2 from './img/outfit-rock-2.png';
import outfitBoho1 from './img/outfit-boho-1.jpg';
import outfitBoho2 from './img/outfit-boho-2.jpg';
import outfitCasual1 from './img/outfit-casual-1.jpg';
import outfitCasual2 from './img/outfit-casual-2.jpg';
import { Link } from 'react-router-dom';

const OutfitsMujer = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 d-none d-md-block estilo-rock-mujer"></div>
              <div className="col-12 col-md-6 p-5">
                <h3 className="mb-5 text-center">Outfits propuestos</h3>
                <h2 className="brittany fs-1 py-4 text-center">Estilo Rocker</h2>
                <div className="container">
                  <div className="d-flex gap-4">
                      <div className="card">
                        <img src={outfitRock1} className="card-img-top" alt="outfit rock" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #1</h5>
                        </div>
                      </div>
                    <div className="card">
                        <img src={outfitRock2} className="card-img-top" alt="outfit rock" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #2</h5>
                        </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mt-5'>
                        <Link to="/products" className="btn btn-primary">Ver productos</Link>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 d-none d-md-block estilo-boho"></div>
              <div className="col-12 col-md-6 p-5">
                <h3 className="mb-5 text-center">Outfits propuestos</h3>
                <h2 className="brittany fs-1 py-4 text-center">Estilo Boho</h2>
                <div className="container">
                  <div className="d-flex gap-4">
                      <div className="card">
                        <img src={outfitBoho1} className="card-img-top" alt="outfit boho" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #1</h5>
                        </div>
                      </div>
                    <div className="card">
                        <img src={outfitBoho2} className="card-img-top" alt="outfit boho" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #2</h5>
                        </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mt-5'>
                        <Link to="/products" className="btn btn-primary">Ver productos</Link>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 d-none d-md-block estilo-casual"></div>
              <div className="col-12 col-md-6 p-5">
                <h3 className="mb-5 text-center">Outfits propuestos</h3>
                <h2 className="brittany fs-1 py-4 text-center">Estilo Casual chic</h2>
                <div className="container">
                  <div className="d-flex gap-4">
                      <div className="card">
                        <img src={outfitCasual1} className="card-img-top" alt="outfit casual" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #1</h5>
                        </div>
                      </div>
                    <div className="card">
                        <img src={outfitCasual2} className="card-img-top" alt="outfit casual" />
                        <div className="card-body text-center">
                          <h5 className="card-title text-center mb-4">Outfit #2</h5>
                        </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mt-5'>
                        <Link to="/products" className="btn btn-primary">Ver productos</Link>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  )
}

export default OutfitsMujer;