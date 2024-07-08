import Contact from "./pages/Contact/Contact";
import Hero from "./pages/Hero/Hero";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Product />
      <Pricing />
      <Contact />
    </main>
  );
}
