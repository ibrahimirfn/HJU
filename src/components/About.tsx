import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content with animations */}
          <div className={`flex-1 space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
              <span className="relative inline-block">
                PT. Hibrida Jaya Utama
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-green-500 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Kami hadir untuk berkolaborasi dengan para petani dalam
              membangun pertanian Indonesia yang lebih maju, modern,
              dan berkelanjutan. Bersama, kita wujudkan kesejahteraan
              melalui inovasi, teknologi, dan kemitraan yang kokoh untuk
              masa depan pertanian yang lebih cerah.
            </p>
            
            <div className="pt-2">
              <Link
                to="/tentang-kami"
                className="inline-block relative group overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-300"></span>
                <span className="relative inline-block bg-green-500 text-white px-8 py-3 rounded-full group-hover:translate-y-0.5 transition-all duration-300">
                  Tentang Kami
                  <span className={`ml-2 transition-all duration-300 ${isHovering ? 'translate-x-1 opacity-100' : 'opacity-0'}`}>→</span>
                </span>
              </Link>
            </div>

            {/* Stats with counter animation */}
            <div className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                { value: '10+', label: 'Tahun Pengalaman' },
                { value: '100+', label: 'Produk' },
                { value: '1000+', label: 'Petani Mitra' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image with animations */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-200 rounded-lg rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-500 rounded-lg -rotate-2"></div>
              
              {/* Main image */}
              <img
                src="/images/farmer.png"
                alt="Petani di Greenhouse"
                className="relative z-10 rounded-lg shadow-xl hover:-translate-y-2 hover:rotate-1 transition-all duration-500 w-full object-cover"
              />
              
              {/* Floating badge */}
              <div className={`absolute -bottom-6 left-8 z-20 bg-white py-2 px-4 rounded-full shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="text-sm font-medium text-green-600">Pertanian Modern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;