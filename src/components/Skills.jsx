import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: "Back-end development",
      icon: "⚙️",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      tools: "Laravel, Node.js",
      bg: "bg-purple-100",
      iconBg: "bg-purple-200"
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      tools: "Flutter",
      bg: "bg-green-100",
      iconBg: "bg-green-200"
    },
    {
      title: "Information System Management",
      icon: "📊",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      tools: "MySQL, PHP native",
      bg: "bg-blue-100",
      iconBg: "bg-blue-200"
    },
    {
      title: "AI Development",
      icon: "🤖",
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
      tools: "Python",
      bg: "bg-gray-100",
      iconBg: "bg-gray-200"
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`${skill.bg} rounded-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <div className={`${skill.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;