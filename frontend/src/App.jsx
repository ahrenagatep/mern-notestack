import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#3F3F3F_100%)]" /> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#1a1a1a_1px)] bg-[size:20px_20px]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    
  );
}

export default App