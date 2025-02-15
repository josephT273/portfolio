import { useEffect, useState } from "react";

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/josepht273/repos?sort=updated&per_page=9"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Error fetching GitHub projects:", error)
      );
  }, []);

  return (
    <div className="mt-10 w-full p-20" id="projects">
      <h2 className="text-xl font-bold text-center sm:text-left mb-4">
        💻 My GitHub Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {project.description || "No description provided"}
              </p>
              <div className="mt-2">
                <span className="text-xs text-gray-500">
                  ⭐ {project.stargazers_count} Stars
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
