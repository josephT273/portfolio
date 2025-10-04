import { FaExternalLinkAlt, FaCalendarAlt, FaMedium } from "react-icons/fa";

const BlogList = () => {
  const blogs = [
    {
      title: "BOLA: Broken Object Level Authorization",
      description:
        "Understanding BOLA is crucial for securing applications and protecting sensitive data. Learn about this critical security vulnerability and how to prevent it.",
      link: "https://josepht273.medium.com/bola-broken-object-level-authorization-0fbcc4f5220e",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*UBqNj5aaqlP9NAKS.png",
      category: "Cybersecurity",
      readTime: "5 min read",
      date: "2024-01-15"
    },
    {
      title: "TryHackMe: Simple CTF",
      description:
        "Practicing penetration testing with a beginner-friendly room on TryHackMe. A step-by-step walkthrough of common CTF challenges.",
      link: "https://josepht273.medium.com/tryhackme-simple-ctf-f3c6af24bb9f",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*WwNnI0pjMveroKZr.png",
      category: "Penetration Testing",
      readTime: "8 min read",
      date: "2024-01-10"
    },
    {
      title: "TryHackMe: Vulnversity Writeup",
      description:
        "This room offers hands-on experience in reconnaissance, web application vulnerabilities, and basic privilege escalation techniques.",
      link: "https://josepht273.medium.com/tryhackme-vulnversity-writeup-90de34b0b034",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*aonfR0avER0h8gKbZPrVeg.png",
      category: "Web Security",
      readTime: "12 min read",
      date: "2024-01-05"
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Cybersecurity": "bg-red-100 text-red-800",
      "Penetration Testing": "bg-orange-100 text-orange-800",
      "Web Security": "bg-blue-100 text-blue-800",
      "Development": "bg-green-100 text-green-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="blogs" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Sharing knowledge about cybersecurity, development, and technology
          </p>
          <a 
            href="https://josepht273.medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            <FaMedium />
            <span>View All Posts on Medium</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>
                
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>Read More</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow my Medium profile to get notified about new articles on cybersecurity, 
              development, and technology insights.
            </p>
            <a 
              href="https://josepht273.medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <FaMedium />
              <span>Follow on Medium</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
