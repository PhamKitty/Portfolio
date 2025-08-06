import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur rounded-xl shadow-xl p-8 mt-10">
        <h1 className="text-4xl font-bold text-accent mb-2 text-center">PhamKitty</h1>
        <h2 className="text-xl mb-4 text-center font-medium">Senior Frontend Engineer (14 years)</h2>
        <p className="mb-4 text-center text-lg">
          JavaScript • React • Angular • HTML5 • CSS3 • Team Lead • Cloud • Kubernetes • Docker • CI/CD
        </p>
        <div className="flex gap-4 justify-center mb-4">
          <a href="https://github.com/PhamKitty" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="text-xl hover:text-primary">
            <FaEnvelope />
          </a>
        </div>
        <div className="mt-8 text-center">
          <a href="#projects" className="btn btn-primary bg-primary border-0 text-white px-6 py-2 rounded-lg shadow hover:bg-accent transition">
            View Projects
          </a>
        </div>
      </div>
      <footer className="mt-10 text-white/70 text-sm">
        &copy; {new Date().getFullYear()} PhamKitty · Powered by React & Tailwind
      </footer>
    </div>
  );
}