const Team = () => {
  const teamMembers = [
    {
      name: "Александр Сидоров",
      role: "Lead Game Designer",
      description:
        "15 лет опыта в создании игровой механики и пользовательского опыта",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: "@alex_games",
    },
    {
      name: "Мария Волкова",
      role: "Art Director",
      description:
        "Визуальная концепция и арт-дирекция крупнейших игровых проектов",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9f81dbd?w=300&h=300&fit=crop&crop=face",
      social: "@maria_art",
    },
    {
      name: "Дмитрий Козлов",
      role: "Lead Developer",
      description: "Технический директор с экспертизой в Unity и Unreal Engine",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: "@dmitry_code",
    },
    {
      name: "Анна Петрова",
      role: "Narrative Designer",
      description:
        "Создание захватывающих сюжетов и диалогов для игровых миров",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
      social: "@anna_story",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 neon-text">НАША КОМАНДА</h2>
          <div className="w-24 h-1 gaming-gradient mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Талантливые профессионалы, которые создают игровые шедевры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="gaming-card rounded-xl p-6 hover:gaming-glow transition-all duration-500 hover:scale-105">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-red-500/20 group-hover:border-red-500 transition-all duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-red-500/20 to-transparent group-hover:from-red-500/40 transition-all duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {member.name}
                </h3>

                <div className="text-red-400 font-semibold mb-3">
                  {member.role}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                <div className="text-gray-500 text-sm">{member.social}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="gaming-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Присоединяйтесь к нам!
            </h3>
            <p className="text-gray-400 mb-6">
              Мы всегда ищем талантливых разработчиков, художников и
              геймдизайнеров для создания игр будущего.
            </p>
            <button className="gaming-gradient px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300">
              Открытые Вакансии
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
