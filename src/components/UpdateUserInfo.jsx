"use client";

import { authClient } from "@/lib/auth-client";
// import Link from "next/link";

const UpdateUserInfo = () => {

    const updateProfile=async(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const image=e.target.image.value;


await authClient.updateUser({
    image,
    name
})

    }



  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=" btn btn-primary rounded-full"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Edit Profile
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={updateProfile}>
        <fieldset className="fieldset border-amber-300 mx-auto my-10 rounded-box max-w-xl border gap-4 p-4">
          <legend className="fieldset-legend text-2xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">
           Update Profile
          </legend>

          <label className="label text-lg text-black font-bold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="input w-full"
            placeholder="Change Your Name"
          />

         

          <label className="label text-lg text-black font-bold">Image</label>
          <input
            type="text"
            name="image"
            required
            className="input w-full"
            placeholder="Update Image by URL"
          />
          

        

          <button
            type="submit"
            className="btn  bg-gradient-to-r from-orange-500 to-red-500 mt-4 text-lg text-white font-bold"
          >
            Update
          </button>

          <button className="btn" type="reset">Clear</button>

          
        </fieldset>
      </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUserInfo;
