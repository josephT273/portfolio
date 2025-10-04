import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(
      "https://api.github.com/users/josepht273/repos?sort=updated&per_page=12"
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub projects:", error);
        setLoading(false);
      });
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-600",
      Python: "bg-yellow-600",
      Java: "bg-red-500",
      Kotlin: "bg-purple-500",
      "C++": "bg-blue-500",
      "C#": "bg-green-500",
      Go: "bg-cyan-500",
      Rust: "bg-orange-600",
      PHP: "bg-purple-600",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
      Shell: "bg-gray-600",
      Dockerfile: "bg-blue-400",
    };
    return colors[language] || "bg-gray-500";
  };

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.language === filter;
  });

  const languages = [...new Set(projects.map(p => p.language).filter(Boolean))];

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Projects
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of my recent work and side projects
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === "all" 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => setFilter(language)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === language 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                      {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description || "No description provided"}
                    </p>
                  </div>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-2"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>

                {project.language && (
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)} mr-2`}></div>
                    <span className="text-sm text-gray-600">{project.language}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaStar />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCodeBranch />
                      <span>{project.forks_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaEye />
                      <span>{project.watchers_count}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Updated {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;
