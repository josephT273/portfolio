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
    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
      {[
        {
          icon: <FaGithub />,
          link: "https://github.com/josepht273",
          label: "GitHub",
          color: "hover:bg-gray-900 hover:text-white",
          bgColor: "bg-gray-100",
        },
        {
          icon: <FaLinkedin />,
          link: "https://linkedin.com/in/josepht273",
          label: "LinkedIn",
          color: "hover:bg-blue-600 hover:text-white",
          bgColor: "bg-blue-100",
        },
        {
          icon: <FaXTwitter />,
          link: "https://x.com/josepht273",
          label: "Twitter",
          color: "hover:bg-black hover:text-white",
          bgColor: "bg-gray-100",
        },
        {
          icon: <FaTelegram />,
          link: "https://t.me/josepht273",
          label: "Telegram",
          color: "hover:bg-blue-500 hover:text-white",
          bgColor: "bg-blue-100",
        },
        {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/joe.tade/#",
          label: "Instagram",
          color: "hover:bg-pink-500 hover:text-white",
          bgColor: "bg-pink-100",
        },
        {
          icon: <FaFacebook />,
          link: "https://facebook.com/josepht273",
          label: "Facebook",
          color: "hover:bg-blue-600 hover:text-white",
          bgColor: "bg-blue-100",
        },
        {
          icon: <FaReddit />,
          link: "https://reddit.com/user/josepht273",
          label: "Reddit",
          color: "hover:bg-orange-500 hover:text-white",
          bgColor: "bg-orange-100",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item.bgColor} text-gray-700 text-xl p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${item.color} group`}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
