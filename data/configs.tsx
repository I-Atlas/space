import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const configs = {
  copyright: `Copyright © ${new Date().getFullYear()} Iliya Bolotov. All Rights Reserved.`,
  author: {
    name: "Iliya Bolotov",
    accounts: [
      {
        url: "https://github.com/I-Atlas",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://linkedin.com/in/bolotov-iliya",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "mailto:bolotov.iliya.w@gmail.com",
        label: "Mail Iliya",
        type: "gray",
        icon: <FiMail />,
      },
    ],
  },
};