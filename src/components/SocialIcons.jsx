import {
  FaTelegram,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaReddit,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-6">
      {[
        {
          icon: <FaTelegram />,
          link: "https://t.me/josepht273",
          color: "hover:text-[#0088cc]",
        },
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/joe.tade/#",
          color: "hover:text-[#E4405F]",
        },
        {
          icon: <FaXTwitter />,
          link: "https://x.com/josepht273",
          color: "hover:text-black",
        },
        {
          icon: <FaFacebook />,
          link: "https://facebook.com/josepht273",
          color: "hover:text-[#1877F2]",
        },
        {
          icon: <FaReddit />,
          link: "https://reddit.com/user/josepht273",
          color: "hover:text-[#FF4500]",
        },
        {
          icon: <FaGithub />,
          link: "https://github.com/josepht273",
          color: "hover:text-[#333333]",
        },
        {
          icon: <FaLinkedin />,
          link: "https://linkedin.com/in/josepht273",
          color: "hover:text-[#0077b5]",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-black text-2xl p-2 rounded-full transition-all duration-300 ${item.color}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
