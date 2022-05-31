import React from "react";
import ProductCard from "./ProductCard";
function TopProducts() {
  let fruits = [
    {
      url: "https://html.design/demo/floram/images/p1.png",
      title: "Product Name",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      url: "https://html.design/demo/floram/images/p2.png",
      title: "Product Name",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      url: "https://html.design/demo/floram/images/p3.png",
      title: "Product Name",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      url: "https://html.design/demo/floram/images/p4.png",
      title: "Product Name",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      url: "https://html.design/demo/floram/images/p5.png",
      title: "Product Name",
      description: "Lorem ipsum dolor sit amet.",
    },

    {
      url: "https://html.design/demo/floram/images/p6.png",
      title: "Product Name",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <React.Fragment>
      <h2 className="text-center my-4">Our Top Products!</h2>
      <div className="container">
        <div className="row">
          {fruits.map((e) => (
            <div className="col-sm-4">
              <ProductCard
                img={e.url}
                title={e.title}
                description={e.description}
              />
            </div>
          ))}
        </div>
      </div>

     <div className="container d-flex justify-content-center my-5">
     <button className="text-center btn-info btn w-50">VIEW ALL!</button>
     </div>
    </React.Fragment>
  );
}

export default TopProducts;
