import React from "react";
import { github, linkedin, instagram } from "../assets"; // make sure these icons exist

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d1a] py-6 mt-12 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Abdullah Ali. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/AbdullahAli2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={github} alt="GitHub" className="w-6 h-6 brightness-150 hover:drop-shadow-[0_0_10px_#fff]" />
          </a>
          <a
            href="https://linkedin.com/in/abdullah-ali-44a892330"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 brightness-150 hover:drop-shadow-[0_0_10px_#0A66C2]" />
          </a>
          <a
            href="https://instagram.com/__abdullah.ali__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={instagram} alt="Instagram" className="w-6 h-6 brightness-150 hover:drop-shadow-[0_0_10px_#e1306c]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
