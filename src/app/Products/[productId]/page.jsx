import Image from "next/image";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { productId } = await params; 

  const res = await fetch("http://localhost:3000/Data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  const product = data.find((item) => item.id === Number(productId)); 

  

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        

        <div className="bg-base-200 p-5 rounded-xl">
          <figure>
            <Image
              width={600}
              height={600}
              src={product.image}
              alt={product.name}
                className="w-full h-auto object-cover"
            />
          </figure>
        </div>

        

        <div>
          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>

          <p className="text-gray-500 mb-2">
            Brand: <span className="font-semibold">{product.brand}</span>
          </p>

          <p className="text-gray-500 mb-2">
            Category: <span className="font-semibold">{product.category}</span>
          </p>

          <p className="text-lg font-semibold mb-2">
            Rating: {product.rating} ⭐
          </p>

          <p className="text-xl font-bold text-orange-600 mb-3">
            Price: {product.price} ৳
          </p>

          <p className="mb-4">{product.description}</p>

          <p
            className={`font-semibold mb-4 ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </p>

          <button className="btn text-white font-bold bg-gradient-to-r from-orange-500 to-yellow-500 w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
