import React from "react";

function ProductCard(props) {
  return (
    <div style={{ minHeight: "450px" }} class="card m-2">
      <div className="container d-flex justify-content-center align-items-center p-5">
        <img src={props.img} class="w-75" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href="#" class="btn btn-sm btn-warning">
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
