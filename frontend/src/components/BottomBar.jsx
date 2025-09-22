import { Link, useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { HiMoon, HiOutlinePlus } from "react-icons/hi";
import { logout } from "../pages/lib/auth";

import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const navbar = () => {
  
  return <footer className="bg-transparent border-b border-base-content/10">
    <div className="mx-auto max-w-6xl p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-primary font-light card-actions justify-center items-center">
            NoteStack - created by Ahren Agatep
        </h1>
        <div className="flex items-center gap-4">

            <Link to={"https://www.instagram.com/ahrenagatep/"}className="btn btn-ghost">
              <FaInstagram className="size-6" />
              {/* <span>Instagram</span> */}
            </Link>

            <Link to={"https://www.instagram.com/ahrenagatep/"} className="btn btn-ghost">
              <FaGithub className="size-6" />
              {/* <span>Github</span> */}
            </Link>

            <Link to={"https://www.linkedin.com/in/ahrenagatep/"} className="btn btn-ghost">
              <FaLinkedinIn className="size-6" />
              {/* <span>Connect with Me</span> */}
            </Link>
            
        </div>
      </div>
    </div>
  </footer>;
};

export default navbar;