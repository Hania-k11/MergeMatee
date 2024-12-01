import React from 'react';

const Register = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-zinc-400 via-gray-200 to-white text-center px-6 py-16">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8 -mt-7">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Join MergeMate</h2>
        <p className="text-sm text-gray-600 mb-6">
          Register as a Contributor or Project Owner and start collaborating on amazing projects.
        </p>
        <form className="space-y-6">
          {/* Role Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              name="role"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            >
              <option value="Contributor">Contributor</option>
              <option value="Project Owner">Project Owner</option>
            </select>
          </div>

          {/* Experience Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">Experience</label>
            <input
              type="text"
              name="experience"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="E.g., 3 years in React"
              required
            />
          </div>

          {/* Tech Stack Field */}
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
            <input
              type="text"
              name="techStack"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="E.g., React, Node.js, Python"
              required
            />
          </div>

           {/* Expertise Field */}
           <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
            <input
              type="text"
              name="Expertise"
              className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="E.g., Frontend, Backend, Database"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg shadow-md py-3 hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
