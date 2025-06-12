import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-8xl md:text-9xl font-black mb-6 neon-text gaming-gradient bg-clip-text text-transparent">
          REDSHORD
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide">
          Создаем игры будущего
        </p>

        <div className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Инновационная игровая студия, разрабатывающая захватывающие миры и
          незабываемые приключения для геймеров по всему миру
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="gaming-gradient px-8 py-4 rounded-lg text-white font-semibold text-lg hover:scale-105 transition-all duration-300 gaming-glow">
            Наши Игры
          </button>
          <button className="border-2 border-red-600 px-8 py-4 rounded-lg text-red-400 font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300">
            О Студии
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full p-1">
          <div className="w-1 h-3 bg-red-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
