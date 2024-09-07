import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col space-y-4">
      <a 
        href="https://www.linkedin.com/in/tharun-raj-726360252/?trk=opento_sprofile_details" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin size={30} className="text-white hover:text-blue-500 transition-colors duration-300" />
      </a>
      <a 
        href="https://github.com/Tharunraj-U" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaGithub size={30} className="text-white hover:text-gray-400 transition-colors duration-300" />
      </a>
      <a 
        href="https://wa.me/917010791192" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaWhatsapp size={30} className="text-white hover:text-green-500 transition-colors duration-300" />
      </a>
    </div>
  );
};

export default SocialMedia;