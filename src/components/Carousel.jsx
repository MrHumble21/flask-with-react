import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex justify-content-center p-5 align-items-center flex-column">
                <div className="container-fluid ">
                  <h2>We Sell The Best Fruits</h2>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <button type="button" className="btn btn-primary btn-sm mx-1">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="https://html.design/demo/floram/images/slider-img.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item ">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex justify-content-center p-5 align-items-center flex-column">
                <div className="container-fluid">
                  <h2>We Sell The Best Fruits</h2>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <button type="button" className="btn btn-primary btn-sm mx-1">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="https://html.design/demo/floram/images/slider-img.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container">
            <div className="row">
              <div className="col-sm-6  d-flex justify-content-center p-5 align-items-center flex-column">
                <div className="container-fluid ">
                  <h2>We Sell The Best Fruits</h2>
                  <p>
                    Anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsuanything embarrassing hidden in the middle of
                    text. All the Lorem Ipsumm
                  </p>
                  <button type="button" className="btn btn-primary btn-sm mx-1">
                    BUY NOW
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="https://html.design/demo/floram/images/slider-img.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="">Previous</span>
        </button>
        <button
          className="btn btn-outline-secondary mx-2"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
