import Cards from "@/components/Cards";



const ProductPage = async() => {
    const productPromise=await fetch('http://localhost:3000/Data.json',{ cache: 'no-store' });
    const productsData=await productPromise.json()

    return (
        <div className="bg-base-200">
            <div className="max-w-285 mx-5 md:mx-auto  py-10 ">
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3">
             {
               productsData.map(productData=> <Cards key={productData.id} productData={productData} ></Cards>)

            }
           </div>


            
        </div>
        </div>
    );
};

export default ProductPage;


