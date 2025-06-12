const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 neon-text">О REDSHORD</h2>
          <div className="w-24 h-1 gaming-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-red-400 mb-4">
              Наша Миссия
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              REDSHORD — это команда страстных разработчиков, создающих игровые
              миры, которые захватывают воображение и оставляют неизгладимые
              впечатления. Мы верим, что каждая игра должна рассказывать историю
              и дарить эмоции.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="gaming-card p-6 rounded-lg hover:gaming-glow transition-all duration-300">
                <h4 className="text-xl font-semibold text-red-400 mb-2">
                  🎮 Инновации
                </h4>
                <p className="text-gray-400">
                  Передовые технологии в каждой игре
                </p>
              </div>

              <div className="gaming-card p-6 rounded-lg hover:gaming-glow transition-all duration-300">
                <h4 className="text-xl font-semibold text-red-400 mb-2">
                  🚀 Качество
                </h4>
                <p className="text-gray-400">Безупречная проработка деталей</p>
              </div>

              <div className="gaming-card p-6 rounded-lg hover:gaming-glow transition-all duration-300">
                <h4 className="text-xl font-semibold text-red-400 mb-2">
                  🌟 Креативность
                </h4>
                <p className="text-gray-400">Уникальные идеи и концепции</p>
              </div>

              <div className="gaming-card p-6 rounded-lg hover:gaming-glow transition-all duration-300">
                <h4 className="text-xl font-semibold text-red-400 mb-2">
                  🎯 Геймеры
                </h4>
                <p className="text-gray-400">Создаем для истинных ценителей</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="gaming-card p-8 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 gaming-gradient opacity-10"></div>
              <div className="relative z-10">
                <div className="text-6xl font-black text-red-500 mb-4">10+</div>
                <div className="text-xl text-gray-300 mb-6">Лет опыта</div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Выпущенных игр</span>
                    <span className="text-2xl font-bold text-red-400">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Активных игроков</span>
                    <span className="text-2xl font-bold text-red-400">2M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Наград получено</span>
                    <span className="text-2xl font-bold text-red-400">15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
