import Link from "next/link";
import Cards from "./Cards";


const PopularProducts = async() => {
    const productPromise=await fetch('http://localhost:3000/Data.json',{ cache: 'no-store' });
    const productsData=await productPromise.json()

    return (
        <div className="bg-base-200">
            <div className="max-w-285 mx-5 md:mx-auto  py-10 ">
            <h2 className="text-center text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Popular Products</h2>
            <div className="flex justify-end">
                <Link className=" link link-error" href={'/Products'}>see more</Link>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3">
             {
               productsData.slice(0, 3).map(productData=> <Cards key={productData.id} productData={productData} ></Cards>)

            }
           </div>


            
        </div>
        </div>
    );
};

export default PopularProducts;