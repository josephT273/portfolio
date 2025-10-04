/** biome-ignore-all lint/a11y/noSvgWithoutTitle: dd */
/** biome-ignore-all lint/a11y/useValidAnchor: ss */
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import GitHubProjects from "./components/GitHubProjects";
import Skills from "./components/Skills";

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
				<nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto">
					<a
						href="/"
						className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
					>
						Joseph Tadesse
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
						<a
							href="#about"
							className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
						>
							About
						</a>
						<a
							href="#skills"
							className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
						>
							Skills
						</a>
						<a
							href="#projects"
							className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
						>
							Projects
						</a>
						<a
							href="#blogs"
							className="text-base lg:text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
						>
							Blog
						</a>
						<a
							href="#contact"
							className="bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base"
						>
							Contact
						</a>
					</div>

					{/* Mobile menu button */}
					<button
						type="button"
						onClick={toggleMobileMenu}
						className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
						aria-label="Toggle mobile menu"
					>
						<svg
							className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
						<div className="px-4 py-4 space-y-3">
							<a
								href="#about"
								onClick={closeMobileMenu}
								className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
							>
								About
							</a>
							<a
								href="#skills"
								onClick={closeMobileMenu}
								className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
							>
								Skills
							</a>
							<a
								href="#projects"
								onClick={closeMobileMenu}
								className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
							>
								Projects
							</a>
							<a
								href="#blogs"
								onClick={closeMobileMenu}
								className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
							>
								Blog
							</a>
							<a
								href="#contact"
								onClick={closeMobileMenu}
								className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center font-medium mt-4"
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</header>
			<AboutMe />
			<Skills />
			<GitHubProjects />
			<BlogList />
			<Footer />
		</div>
	);
}

export default App;
