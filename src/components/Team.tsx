const Team = () => {
  const teamMembers = [
    {
      name: "Студент #1",
      role: "Game Designer / Programmer",
      description:
        "Отвечает за игровую механику и программирование. Изучает Unity и C#.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      year: "1 курс",
    },
    {
      name: "Студент #2",
      role: "Artist / Level Designer",
      description:
        "Создает визуальную составляющую игры и дизайн уровней. Изучает Blender и Photoshop.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      year: "1 курс",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-white">НАША КОМАНДА</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto">
            Два студента, объединенных общей мечтой создавать игры
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-red-500/30"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                <div className="text-red-400 font-semibold mb-1">
                  {member.role}
                </div>

                <div className="text-gray-500 text-sm mb-4">{member.year}</div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Мы только начинаем!
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Как молодая команда, мы открыты к обучению, экспериментам и новым
              идеям. Следите за нашими успехами и неудачами в разработке PRAXIS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
