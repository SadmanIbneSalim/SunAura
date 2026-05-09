"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import {  useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";



const LogInPage = () => {
//   const router = useRouter();
const searchParams=useSearchParams();
const callbackURL = searchParams.get("callbackUrl") || "/"; 

console.log(callbackURL);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log("Name:", name, "Email:", email, "Password:", password);

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,

        callbackURL: callbackURL || "/", 
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
        //   router.push("/");
        toast.success("Login successful!!");
        },
        onError: (ctx) => {
          // display the error message
          toast.error("Something went wrong!");
        },
      },
    );

    // console.log({data , error});
  };

 const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: callbackURL || "/", 
  });
};

  return (
    <div className="bg-base-200 p-10">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset border-amber-300 mx-auto my-10 rounded-box max-w-xl border gap-4 p-4">
          <legend className="fieldset-legend text-2xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">
            Login
          </legend>

          <label className="label text-lg text-black font-bold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="input w-full"
            placeholder="Email"
          />

          <label className="label text-lg text-black font-bold">Password</label>
          <input
            type="password"
            name="password"
            required
            className="input w-full"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn bg-gradient-to-r from-orange-500 to-red-500 mt-4 text-lg text-white font-bold"
          >
            Login
          </button>
          <button className="btn" type="reset">Clear</button>


          <p className="text-center">Or</p>

          <button onClick={signIn} type="button" className="btn btn-outline"><GrGoogle></GrGoogle>Sign in with  Google</button>

          <hr className="text-neutral-300 pt-5" />
          <h1 className="text-center text-lg">
            Do not have any account?{" "}
            <span className="link link-primary">
              <Link href={"/authentication/signup"}>SignUp</Link>
            </span>
          </h1>
        </fieldset>
      </form>
      
    </div>
  );
};

export default LogInPage;
