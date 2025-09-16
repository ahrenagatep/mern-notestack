import { Link, useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { HiMoon, HiOutlinePlus } from "react-icons/hi";
import { isLoggedIn, logout } from "../pages/lib/auth";

const navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to log out?")) return;

    logout();
    navigate("/login");
  };
  
  return <header className="bg-base-300 border-b border-base-content/10">
    <div className="mx-auto max-w-6xl p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">NoteStack</h1>
        <div className="flex items-center gap-4">

            <Link to={"/create"} className="btn btn-primary">
              <HiOutlinePlus className="size-5" />
              <span>New Note</span>
            </Link>

            <button className="btn btn-secondary">
              <HiMoon className="size-5" />
              <span>Dark Mode</span>
            </button>

            {/* login/logout button */}
            {!isLoggedIn() ? (
              <Link to={"/login"} className="btn btn-primary">
                <IoLogInOutline className="size-5" />
                <span>Login</span>
              </Link>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">
                <IoLogOutOutline className="size-5" />
                <span>Logout</span>
              </button>
            )}
            
        </div>
      </div>
    </div>
  </header>;
};

export default navbar;