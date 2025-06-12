import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Games />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;
