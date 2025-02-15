const BlogList = () => {
  const blogs = [
    {
      title: "BOLA: Broken Object Level Authorization",
      description:
        "Understanding BOLA is crucial for securing applications and protecting sensitive data.",
      link: "https://josepht273.medium.com/bola-broken-object-level-authorization-0fbcc4f5220e",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*UBqNj5aaqlP9NAKS.png",
    },
    {
      title: "TryHackMe: Simple CTF",
      description:
        "Practicing penetration testing with a beginner-friendly room on TryHackMe.",
      link: "https://josepht273.medium.com/tryhackme-simple-ctf-f3c6af24bb9f",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*WwNnI0pjMveroKZr.png",
    },
    {
      title: "TryHackMe: Vulnversity Writeup",
      description:
        "This room offers hands-on experience in reconnaissance, web application vulnerabilities, and basic privilege escalation techniques. ",
      link: "https://josepht273.medium.com/tryhackme-vulnversity-writeup-90de34b0b034",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*aonfR0avER0h8gKbZPrVeg.png",
    },
  ];

  return (
    <div className="mt-10 w-full p-20" id="blogs">
      <h2 className="text-2xl font-bold text-center sm:text-left mb-4">
        📖 My Latest Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
