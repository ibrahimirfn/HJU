import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverButton, setHoverButton] = useState(false);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Calculate parallax effect for background
  const parallaxX = mousePosition.x / window.innerWidth * 20 - 10;
  const parallaxY = mousePosition.y / window.innerHeight * 20 - 10;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out scale-110"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/banner.png)`,
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-green-500/20 rounded-full blur-xl" />

      {/* Content with staggered entrance animations */}
      <div className="relative container mx-auto text-center text-white px-4 max-w-4xl z-10">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          SELAMAT DATANG DI <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">HIBRIDA JAYA UTAMA</span>
        </h1>
        
        <p 
          className={`text-lg md:text-xl mb-12 text-gray-200 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Solusi Tepat Peralatan dan Obat Pertanian Anda
        </p>
        
        <div
          className={`transition-all duration-700 delay-500 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="#about"
            className="inline-block relative group border-2 border-white px-8 py-3 rounded-full text-white transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            {/* Button background animation */}
            <span className={`absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 transition-all duration-300 ${
              hoverButton ? 'opacity-100' : 'opacity-0'
            }`}></span>
            
            {/* Button text with hover effect */}
            <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
              Cari Tahu
            </span>
            
            {/* Arrow animation */}
            <span className={`ml-2 relative inline-block transition-all duration-300 ${
              hoverButton ? 'translate-x-1 opacity-100' : 'opacity-0'
            }`}>→</span>
          </a>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;