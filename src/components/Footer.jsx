import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Joseph Tadesse
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer, Android Developer, and Junior Penetration Tester. 
              Passionate about creating innovative solutions and securing digital systems.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:josepht273@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                  josepht273@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <SocialIcons />
              <div className="pt-4">
                <a 
                  href="mailto:josepht273@gmail.com"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <FaEnvelope />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Joseph Tadesse. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;