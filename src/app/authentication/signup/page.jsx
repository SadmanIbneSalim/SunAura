"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";

const SignUpPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

   

    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        image,
        name,

        // callbackURL: "/"
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          router.push("/authentication/login");
          toast.success('SignUp Successful')
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
      callbackURL: "/",
    });
  };

  return (
    <div className="bg-base-200 p-10">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset border-amber-300 mx-auto my-10 rounded-box max-w-xl border gap-4 p-4">
          <legend className="fieldset-legend text-2xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">
            SignUp
          </legend>

          <label className="label text-lg text-black font-bold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="input w-full"
            placeholder="Your Name"
          />

          <label className="label text-lg text-black font-bold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="input w-full"
            placeholder="Email"
          />

          <label className="label text-lg text-black font-bold">Image</label>
          <input
            type="text"
            name="image"
            required
            className="input w-full"
            placeholder="Image URL"
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
            SignUp
          </button>

          <button className="btn" type="reset">Clear</button>

          <p className="text-center">Or</p>
          
                    <button onClick={signIn} type="button" className="btn btn-outline"><GrGoogle></GrGoogle>Sign up with  Google</button>

          <hr className="text-neutral-300 pt-5" />
          <h1 className="text-center text-lg">
            Already have an account?{" "}
            <span className="link link-primary">
              <Link href={"/authentication/login"}>Login</Link>
            </span>
          </h1>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
