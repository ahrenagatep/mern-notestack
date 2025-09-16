import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import api from "./lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import { useNavigate } from "react-router";
import { isLoggedIn } from "./lib/auth.js";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // toast.error shows up twice, fix it.
    if (!isLoggedIn()) {
      toast.error("Log in to save notes.");
      setTimeout(() => {navigate("/login")}, 1000);
      return;
    }

    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await api.get("/notes", {
          headers: {
            Authorization: 'Bearer ${token}',
          },
        });

        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);

      } catch (Error) {
        console.log(Error);
        console.log("Error fetching notes.");
        if (Error.response?.status === 429) {
          setIsRateLimited(true)
        } else if (Error.response?.status === 401) {
          toast.error("Session expired. Please log in again.");
          navigate("/login");
        } else {
          toast.error("Failed to load notes.")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes();
  }, [])

  return (
    <div className="min-h-sceen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;