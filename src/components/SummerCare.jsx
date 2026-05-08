import React from "react";

const SummerCare = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-285 mx-5 xl:mx-auto">
        <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">
          Summer care tips
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-7">
          <div className="flex card   bg-base-100  shadow-sm">
            <div className="card-body ">
              <h2 className="card-title">☀️ Protect from UV rays</h2>
              <p>
                Always apply SPF 30+ sunscreen at least 15 min before going out.
              </p>
            </div>
          </div>
          <div className="flex card   bg-base-100  shadow-sm">
            <div className="card-body ">
              <h2 className="card-title">💧 Stay hydrated daily</h2>
              <p>Drink 8–10 glasses of water. Coconut water works great too.</p>
            </div>
          </div>
          <div className="flex card   bg-base-100  shadow-sm">
            <div className="card-body ">
              <h2 className="card-title">🧴 Moisturize your skin</h2>
              <p>
                Use lightweight, water-based moisturizers to avoid clogged
                pores.
              </p>
            </div>
          </div>
          <div className="flex card   bg-base-100  shadow-sm">
            <div className="card-body ">
              <h2 className="card-title">🧢 Shade is your best friend</h2>
              <p>Wear wide-brim hats or seek shade between 10am – 4pm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCare;
