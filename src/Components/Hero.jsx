import React, { useEffect, useRef ,useState} from "react";
import gsap from "gsap";
import MovieCards from "./MovieCard";

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");


  useEffect(() => {
    // Hero section fade-in effect
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Heading slide-down effect
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    // Paragraph slide-up effect
    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: "power2.out" }
    );

    // Input fade-in with scale effect
    gsap.fromTo(
      inputRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <>
    
    <div
      ref={heroRef}
      className="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden bg-gray-900 px-4 "
      style={{
        backgroundImage: "url('/hero-img.png')",
      }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative p-6 rounded-lg text-center  w-full">
        <h1 ref={headingRef} className="text-white text-4xl md:text-6xl font-bold mb-4">
          Find Your Favorite Movies
        </h1>
        <p ref={paraRef} className="text-white text-base md:text-lg mb-6">
          Search for movies and explore details instantly
        </p>
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search movies..."
          className="w-full md:w-96 p-3 pl-8 rounded-full border border-white bg-white text-black focus:ring-2 focus:ring-red-400 transition-all duration-300 "
        />

      </div>

    </div>
      <MovieCards search={search}/>

    </>
  );
};

export default Hero;

