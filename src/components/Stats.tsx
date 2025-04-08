import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const stats = [
    { number: 131, label: "Brand Colabs", emoji: "🤝" },
    { number: 524, label: "Agri Spots", emoji: "🔥" },
    { number: 1240, label: "Farming Fam", emoji: "💯" }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
          <span className="relative z-10">Farming <span className="text-green-500">goes</span> viral ✨</span>
          <span className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 transform -rotate-1 z-0"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We've been leveling up Jawa Tengah's agriculture game for over a decade with top-tier 
          farming gear and support that's literally unmatched. No cap.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <StatCounter number={stat.number} label={stat.label} emoji={stat.emoji} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ number, label, emoji }: { number: number; label: string; emoji: string }) => {
  const countRef = useRef<HTMLDivElement>(null);
  const [counted, setCounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          animateValue(0, number, 2000);
          setCounted(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, [number, counted]);

  const animateValue = (start: number, end: number, duration: number) => {
    if (!countRef.current) return;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (countRef.current) {
        countRef.current.textContent = current.toString();
      }
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };
  useEffect(() => {
    if (countRef.current) {
      countRef.current.textContent = number.toString();
    }
  }, [number]);
  

  return (
    <div 
      className={`text-center p-6 bg-white rounded-2xl shadow-md transition-all duration-500 transform border-2 border-transparent ${
        isHovered ? 'scale-105 -translate-y-2 shadow-xl border-2 border-green-300 bg-gradient-to-br from-white to-green-50' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center items-center mb-2">
        <div
          ref={countRef}
          className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${
            isHovered ? 'text-green-500' : 'text-green-600'
          }`}
        >
          0
        </div>
        <span className={`text-3xl ml-2 transition-all duration-300 transform ${isHovered ? 'scale-125' : ''}`}>
          {emoji}
        </span>
      </div>
      <p className={`font-medium transition-colors duration-300 ${
        isHovered ? 'text-gray-800' : 'text-gray-600'
      }`}>{label}</p>
      
      <div className={`h-2 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-4 rounded-full transition-all duration-500 ${
        isHovered ? 'w-24' : 'w-16'
      }`}></div>
    </div>
  );
};

export default Stats;