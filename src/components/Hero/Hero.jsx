import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div
  className="hero min-h-100 lg:min-h-180 bg-cover bg-center"
  style={{ backgroundImage: "url('/Banner.png')" }}
>
  <div className="hero-overlay bg-black/50 "></div>

  <div className="text-center mx-3 md:text-start  md:ml-100 text-white w-full  ">
    <div className="w-full max-w-xl space-y-3">

      
      <div className="md:flex flex-wrap gap-2">
        <span className="bg-amber-500 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit">
          ☀️ SUMMER SALE 50% OFF
        </span>
        <span className="bg-red-600 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit">
          🔥 HOT DEALS
        </span>
      </div>

     
      <p className="text-xs sm:text-sm tracking-wide text-gray-200">
        NEW COLLECTION - 2026
      </p>

     
      <h1 className="font-bold leading-tight">
        <span className="block text-bold text-4xl sm:text-5xl md:text-6xl">
          Discover Your
        </span>
        <span className="block text-bold text-orange-500 text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Next Favorite
        </span>
      </h1>
      <p className="text-white/80">
        Handpicked collections, unbeatable prices - updated every day just for you.
      </p>
      <div className="space-x-2">
        <button className="btn bg-amber-600 text-white">Shop Now<FaArrowRightLong /></button>
        <button className="btn bg-transparent text-white">View all deals</button>
      </div>

    </div>
  </div>
</div>
  );
}
