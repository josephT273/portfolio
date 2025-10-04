import SocialIcons from "../components/SocialIcons";

const AboutMe = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-20 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src="https://pbs.twimg.com/profile_images/1885338567603298304/Oe3cqSts_400x400.jpg"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                alt="Joseph Tadesse"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Joseph Tadesse
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Android Developer
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Penetration Tester
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Passionate developer specializing in Android and Web development, with expertise in cybersecurity and penetration testing. 
              Currently pursuing Software Engineering at Wolkite University, continuously expanding my skills in innovative tech projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Remote work</span>
                </div>
              </div>
              
              <SocialIcons />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
