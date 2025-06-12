const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 neon-text">О REDSHORD</h2>
          <div className="w-24 h-1 gaming-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              О нашей студии
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              REDSHORD — это команда из двух студентов первого курса, увлеченных
              разработкой игр. Мы только начинаем свой путь в геймдеве, но уже
              работаем над нашим первым серьезным проектом.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Нашей целью является создание качественных игр с глубоким сюжетом
              и проработанным игровым миром. Мы учимся на каждом этапе
              разработки.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-red-400 mb-2">
                  🎓 Обучение
                </h4>
                <p className="text-gray-400 text-sm">
                  Постоянно изучаем новые технологии
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-red-400 mb-2">
                  🎮 Страсть
                </h4>
                <p className="text-gray-400 text-sm">
                  Любим игры и хотим их создавать
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-red-400 mb-2">
                  🚀 Амбиции
                </h4>
                <p className="text-gray-400 text-sm">
                  Стремимся к качеству в каждой детали
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-red-400 mb-2">
                  🌟 Рост
                </h4>
                <p className="text-gray-400 text-sm">
                  Развиваемся как команда каждый день
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-2">1</div>
                <div className="text-lg text-gray-300 mb-6">
                  Год существования
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Участников команды</span>
                    <span className="text-2xl font-bold text-red-400">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Курс обучения</span>
                    <span className="text-2xl font-bold text-red-400">1-й</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Проектов в разработке</span>
                    <span className="text-2xl font-bold text-red-400">1</span>
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
