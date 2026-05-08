import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import 'animate.css';

export default function HeroSection() {
  return (
    <div
  className="hero min-h-[75vh] bg-cover bg-center"
  style={{ backgroundImage: "url('/Banner.png')" }}
>
  <div className="hero-overlay bg-black/50"></div>

  <div className="hero-content w-full justify-start">
    
    <div className="text-center md:text-left text-white max-w-xl space-y-4">

      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        <span className="bg-amber-500 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate__animated animate__swing">
          ☀️ SUMMER SALE 50% OFF
        </span>

        <span className="bg-red-600 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          🔥 HOT DEALS
        </span>
      </div>

      <p className="text-xs sm:text-sm tracking-wide text-gray-200">
        NEW COLLECTION - 2026
      </p>

      <h1 className="font-bold leading-tight">
        <span className="block text-4xl sm:text-5xl md:text-6xl animate__animated animate__backInRight">
          Discover Your
        </span>

        <span className="block text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate__animated animate__backInLeft">
          Next Favorite
        </span>
      </h1>

      <p className="text-white/80">
        Handpicked collections, unbeatable prices - updated every day just for you.
      </p>

      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <button className="btn bg-amber-600 text-white border-none">
          Shop Now <FaArrowRightLong />
        </button>

        <button className="btn btn-outline text-white">
          View all deals
        </button>
      </div>

    </div>
  </div>
</div>
  );
}
