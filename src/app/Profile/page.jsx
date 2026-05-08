"use client";


import UpdateUserInfo from "@/components/UpdateUserInfo";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
   const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-red-200 flex items-center justify-center px-4">
      
      <div className="card w-full max-w-md bg-gradient-to-r from-orange-300 to-red-300 shadow-2xl rounded-3xl">
        
        <div className="card-body items-center text-center p-10">

        
<div className="avatar mb-5">
  {user.image ? (
    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
      <Image
        src={user?.image}
        alt="Profile"
        width={150}
        height={150}
        className="object-cover"
      />
    </div>
  ) : (
    <div className="avatar avatar-placeholder">
      <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 bg-orange-500 text-white">
        <span className="text-4xl font-bold">
          {user.name?.charAt(0).toUpperCase()}
        </span>
      </div>
    </div>
  )}
</div>

          
          <h2 className="text-3xl font-bold">
            {user?.name}
          </h2>

         
          <p className="text-base-content/70 mt-2">
            {user?.email}
          </p>

          
          <div className="flex gap-3 mt-6">
            

            <UpdateUserInfo></UpdateUserInfo>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;