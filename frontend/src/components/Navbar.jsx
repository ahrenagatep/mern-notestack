import { Link } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import { HiMoon, HiOutlinePlus } from "react-icons/hi";

const navbar = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      toast.success("Login successful!");
      console.log("Login success ", tokenResponse);
    },
    onError: () => {
      toast.error("Login failed.");
      console.log("Login failed")
    }
  });
  
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

            <button className="btn btn-primary" onClick={() => login()}>
              <FcGoogle className="size-7" />
              <span>Sign in with Google</span>
            </button>
        </div>
      </div>
    </div>
  </header>;
};

export default navbar;