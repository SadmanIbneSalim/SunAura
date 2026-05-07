import React from 'react';

const RegisterPage = () => {
    return (
         <div className="bg-base-200 p-10">
      <fieldset className="fieldset  border-amber-300 mx-auto my-10 rounded-box max-w-xl border gap-4 p-4">
        <legend className="fieldset-legend text-2xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">Login</legend>

        <label className="label text-lg text-black font-bold">Name</label>
        <input type="text" className="input w-full" placeholder="Your Name" />

        <label className="label text-lg text-black font-bold">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />


        <label className="label text-lg text-black font-bold">Password</label>
        <input type="password" className="input w-full" placeholder="Password" />

        <button className="btn bg-gradient-to-r from-orange-500 to-red-500 mt-4 text-lg text-white font-bold">Login</button>
      </fieldset>
    </div>
    );
};

export default RegisterPage;