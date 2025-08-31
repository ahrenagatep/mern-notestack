import { Link } from "react-router";
import { Moon, PlusIcon } from "lucide-react";
const navbar = () => {
  return <header className="bg-base-300 border-b border-base-content/10">
    <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">NoteStack</h1>
            <div className="flex items-center gap-4">
                <Link to={"/create"} className="btn btn-primary">
                  <PlusIcon className="size-5" />
                  <span>New Note</span>
                </Link>

                <button className="btn btn-secondary">
                  <Moon className="size-5" />
                  <span>Dark Mode</span>
                </button>
            </div>
        </div>
    
    </div>
  </header>;
};

export default navbar;