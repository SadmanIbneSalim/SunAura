import Image from "next/image";



const Cards = ({productData}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
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
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;