import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/09773859-4275-48b4-bb2b-162c58b5ea99.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div
        className={`text-center z-10 transition-all duration-1000 max-w-4xl mx-auto px-6 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
          МЫ — REDSHORD
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Молодая студия разработки игр
        </p>

        <div className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Два студента первого курса создают PRAXIS — игру об альтернативном
          СССР, где технологии определяют будущее
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 text-white font-medium transition-colors duration-300">
            О PRAXIS →
          </button>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
