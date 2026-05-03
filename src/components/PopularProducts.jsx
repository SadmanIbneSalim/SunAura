import Cards from "./Cards";


const PopularProducts = async() => {
    const productPromise=await fetch('http://localhost:3000/Data.json',{ cache: 'force-cache' });
    const productsData=await productPromise.json()

    return (
        <div className="max-w-[1140px] mx-auto border">
            <h2>Popular Products</h2>
            {
                productsData.map(productData=> <Cards key={productData.id} productData={productData} ></Cards>)

            }


            
        </div>
    );
};

export default PopularProducts;