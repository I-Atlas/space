import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const configs = {
  copyright: `Copyright © ${new Date().getFullYear()} Iliya Bolotov. All Rights Reserved.`,
  author: {
    name: "Iliya Bolotov",
    accounts: [
      {
        url: "https://github.com/I-Atlas",
        label: "Github",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://linkedin.com/in/bolotov-iliya",
        label: "LinkedIn",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://t.me/iliyabolotov",
        label: "Telegram",
        type: "linkedin",
        icon: <FaTelegram />,
      },
      {
        url: "mailto:bolotov.iliya.w@gmail.com",
        label: "Mail Iliya",
        type: "gray",
        icon: <SiGmail />,
      },
    ],
  },
};
