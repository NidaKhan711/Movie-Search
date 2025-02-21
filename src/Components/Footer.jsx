import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MovieFinder. All rights reserved.
        </p>
        <p className="text-sm">
          Created with ❤️ by <a href="https://www.linkedin.com/in/nida-batool-6a5599312/" className="text-red-500 hover:text-red-700">NidaBatool</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
