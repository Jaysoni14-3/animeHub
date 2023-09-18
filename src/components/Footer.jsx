import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" py-4 bg-black">
      <div className="footer-wrapper flex flex-row items-center justify-between container max-w-screen-xl mx-auto">
        <div className="logo">
          <h4 className="text-[#FF4500] text-xl font-bold">
            <a href="/">AnimeHub</a>
          </h4>
        </div>
        <div className="center text-neutral-500">
          <p>Created by Jay Soni</p>
        </div>
        <div className="social-icons flex gap-4">
          <Link
            to={"https://www.linkedin.com/in/jay-soni-61462a227/"}
            target="_blank"
          >
            <FaLinkedin className="text-neutral-400 hover:text-neutral-100 cursor-pointer text-2xl" />
          </Link>
          <Link to={"https://www.instagram.com/jay14_3/"} target="_blank">
            <FaInstagram className="text-neutral-400 hover:text-neutral-100 cursor-pointer text-2xl" />
          </Link>
          <Link to={"https://github.com/Jaysoni14-3"} target="_blank">
            <FaGithub className="text-neutral-400 hover:text-neutral-100 cursor-pointer text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
