
import Companies from "@/components/Companies";
import Hero from "@/components/Hero/Hero";
import PopularProducts from "@/components/PopularProducts";
import SummerCare from "@/components/SummerCare";


export default function Home() {
  return (
    <main>

      <Hero></Hero>
      {/* <PopularProducts></PopularProducts> */}
      <SummerCare></SummerCare>
      <Companies></Companies>
    </main>
  );
}
