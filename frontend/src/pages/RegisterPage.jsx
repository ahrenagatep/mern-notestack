import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // backend stuff here for registering
            toast.success("Account created!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to register.");
        }
    };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <FiArrowLeft className="size-5" />
            Back to Home
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Welcome to NoteStack!</h2>
              <form onSubmit={handleRegister}>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Create a Username</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Enter a Password</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>Register Page</div>
  )
}

export default RegisterPage