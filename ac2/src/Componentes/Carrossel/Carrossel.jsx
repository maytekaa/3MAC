function Carrossel(){
    return(
        <div>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/react/public/img/carro.jfif" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/react/public/img/cristo.jfif" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/react/public/img/trote.jfif" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    )
}

export default Carrossel