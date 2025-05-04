import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-extrabold ">OA</h1>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ojasa21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ojas2105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/ojas21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandLeetcode />
        </a>
        <a
          href="https://www.instagram.com/dream_chaaser_21?igsh=ZXF1cHZpaDNsODc="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
