import AboutMe from "./components/AboutMe";
import BlogList from "./components/BlogList";
import GitHubProjects from "./components/GitHubProjects";
function App() {
  return (
    <div className="border-gray-400">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <a href="/" className="text-2xl font-bold">
            Joseph Tadesse
          </a>
          <div className="flex items-center space-x-6">
            <a href="#blogs" className="text-lg">
              Blog
            </a>
            <a href="#projects" className="text-lg">
              Projects
            </a>
          </div>
        </nav>
      </header>
      <AboutMe />
      <BlogList />
      <GitHubProjects />
    </div>
  );
}

export default App;
