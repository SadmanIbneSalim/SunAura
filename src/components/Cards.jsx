import Image from "next/image";

import {  TbCurrencyTaka } from "react-icons/tb";

const Cards = ({ productData }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            width={400}
            height={300}
            src={`${productData.image}?w=400&q=80`}
            alt={productData.name}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productData.name}
            <div className="badge badge-error text-white">HOT </div>
          </h2>

          <h2 className="text-xl font-semibold">{productData.rating} ⭐️</h2>
          <h3 className="text-xl font-semibold flex items-center">
            {productData.price}
            <TbCurrencyTaka />
          </h3>

          <button className="btn ">View More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
