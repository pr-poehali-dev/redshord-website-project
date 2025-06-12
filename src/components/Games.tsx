const Games = () => {
  const games = [
    {
      title: "PRAXIS",
      genre: "Стратегия / RPG",
      description:
        "Погрузитесь в альтернативную историю СССР, где технологический прогресс определяет судьбу великой державы. Стройте, исследуйте, принимайте решения.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      status: "В разработке",
      features: [
        "Альтернативная история СССР",
        "Технологическое древо развития",
        "Стратегические решения",
        "Проработанный игровой мир",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-white">НАШ ПРОЕКТ</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Знакомьтесь с нашей первой игрой, над которой мы работаем
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-white">
                      {game.title}
                    </h3>
                    <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {game.status}
                    </span>
                  </div>

                  <div className="text-red-400 font-semibold mb-4">
                    {game.genre}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {game.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Особенности:
                    </h4>
                    <ul className="space-y-2">
                      {game.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 flex items-center">
                          <span className="text-red-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-red-600 hover:bg-red-700 py-2 px-6 text-white font-medium transition-colors duration-300">
                      Узнать больше
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
