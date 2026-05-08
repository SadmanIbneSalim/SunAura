"use client";

import Image from "next/image";

const ProfilePage = () => {
  const user = {
    name: "Sadman Ibne Salim",
    email: "sadman@gmail.com",
    photo:
      "https://i.ibb.co/4pDNDk1/avatar.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-red-200 flex items-center justify-center px-4">
      
      <div className="card w-full max-w-md bg-gradient-to-r from-orange-300 to-red-300 shadow-2xl rounded-3xl">
        
        <div className="card-body items-center text-center p-10">

          {/* Profile Image */}
          <div className="avatar mb-5">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
              <Image
                src={user.photo}
                alt="Profile"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          
          <h2 className="text-3xl font-bold">
            {user.name}
          </h2>

         
          <p className="text-base-content/70 mt-2">
            {user.email}
          </p>

          
          <div className="flex gap-3 mt-6">
            <button className="btn btn-primary rounded-full">
              Edit Profile
            </button>

            <button  className="btn btn-outline rounded-full">
              Sign out
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;