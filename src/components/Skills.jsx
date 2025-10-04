import { FaReact, FaNodeJs, FaJava, FaPython, FaAndroid, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiLinux, SiKotlin, SiFirebase } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
        { name: "Python", icon: <FaPython className="text-yellow-600" />, level: 75 },
        { name: "Java", icon: <FaJava className="text-red-500" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 70 },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" />, level: 75 },
      ]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Android", icon: <FaAndroid className="text-green-600" />, level: 90 },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" />, level: 85 },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" />, level: 80 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 70 },
        { name: "AWS", icon: <FaAws className="text-orange-500" />, level: 65 },
        { name: "Linux", icon: <SiLinux className="text-gray-700" />, level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Penetration Testing", "Ethical Hacking", "Web Security", "API Development",
              "RESTful APIs", "GraphQL", "Microservices", "CI/CD", "Agile Development",
              "Scrum", "Test-Driven Development", "Code Review", "Performance Optimization"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;