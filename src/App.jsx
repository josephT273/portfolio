import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="bd-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-lebel="Global"
        >
          <a href="/" className="text-2xl font-bold">
            Joseph Tadesse
          </a>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="text-lg">
              Projects
            </a>
            <a href="#contact" className="text-lg">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <AboutMe />
    </div>
  );
}

export default App;
