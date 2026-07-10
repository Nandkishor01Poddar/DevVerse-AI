import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import Features from "../components/Features/Features";
import Stats from "../components/Stats/Stats";
import About from "../components/About/About";
import CTA from "../components/CTA/CTA"

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <About />
      <CTA />
    </>
  );
}

export default Home;