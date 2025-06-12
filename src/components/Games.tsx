const Games = () => {
  const games = [
    {
      title: "Shadow Nexus",
      genre: "RPG / Action",
      description:
        "Погрузитесь в мрачный кибер-мир будущего, где технологии и магия сплетаются в эпической битве за выживание.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      status: "Доступна сейчас",
    },
    {
      title: "Crimson Empire",
      genre: "Strategy",
      description:
        "Стратегическая игра о построении империи в мире, где каждое решение может изменить ход истории.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      status: "В разработке",
    },
    {
      title: "Void Hunters",
      genre: "Shooter",
      description:
        "Космический шутер от первого лица с захватывающими битвами и исследованием неизведанных галактик.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop",
      status: "Скоро",
    },
    {
      title: "Mystic Realms",
      genre: "Adventure",
      description:
        "Приключенческая игра в фэнтезийном мире с магией, драконами и древними тайнами.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      status: "Концепт",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 neon-text">НАШИ ИГРЫ</h2>
          <div className="w-24 h-1 gaming-gradient mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Откройте для себя захватывающие миры, созданные нашей командой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="gaming-card rounded-xl overflow-hidden hover:gaming-glow transition-all duration-500 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="gaming-gradient px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {game.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {game.title}
                  </h3>
                  <span className="text-red-400 text-sm font-semibold">
                    {game.genre}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {game.description}
                </p>

                <div className="flex gap-3">
                  <button className="flex-1 gaming-gradient py-2 px-4 rounded-lg text-white font-semibold text-sm hover:scale-105 transition-all duration-300">
                    Подробнее
                  </button>
                  <button className="border border-red-600 py-2 px-4 rounded-lg text-red-400 font-semibold text-sm hover:bg-red-600 hover:text-white transition-all duration-300">
                    Трейлер
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-red-600 px-8 py-3 rounded-lg text-red-400 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
            Все Проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Games;
