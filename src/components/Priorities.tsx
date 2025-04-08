import React, { useEffect, useRef, useState } from 'react';

const Priorities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const priorities = [
    {
      title: "Produk Berkualitas Tinggi",
      description: "Kami berkomitmen untuk menghadirkan produk-produk terbaik yang memenuhi bahkan melampaui ekspektasi pelanggan kami. Dengan standar kualitas yang ketat dan inovasi berkelanjutan, setiap produk yang kami hasilkan adalah perwujudan dari dedikasi kami terhadap keunggulan.",
      image: "/images/product-quality.png",
      icon: "✨"
    },
    {
      title: "Dukungan Layanan Purna Jual",
      description: "Kepuasan pelanggan tidak berhenti pada saat pembelian. Kami menyediakan layanan purna jual yang komprehensif dan responsif, memastikan bahwa setiap pelanggan mendapatkan dukungan maksimal sepanjang penggunaan produk kami.",
      image: "/images/customer-support.png",
      icon: "🛠️"
    },
    {
      title: "Mendorong Pertanian Berkelanjutan",
      description: "Sebagai bagian dari tanggung jawab kami terhadap lingkungan dan masa depan, kami aktif mempromosikan dan mendukung praktik pertanian berkelanjutan. Kami berupaya menciptakan keseimbangan antara produktivitas pertanian dan pelestarian sumber daya alam.",
      image: "/images/sustainable-farming.png",
      icon: "🌱"
    }
  ];

  return (
    <section 
      id="priorities" 
      ref={sectionRef}
      className={`py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 md:mb-28 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="relative z-10">Prioritas Kami</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 transform -rotate-1 z-0"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dalam upaya kami untuk menjadi yang terdepan di industri ini, kami telah menetapkan tiga
            pilar utama yang menjadi fokus dan prioritas kami:
          </p>
        </div>
        
        <div className="space-y-32 md:space-y-40">
          {priorities.map((priority, index) => (
            <PriorityItem 
              key={index} 
              priority={priority} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PriorityProps {
  priority: {
    title: string;
    description: string;
    image: string;
    icon: string;
  };
  index: number;
  isVisible: boolean;
}

const PriorityItem: React.FC<PriorityProps> = ({ priority, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemVisible, setItemVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setItemVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-1000 transform ${
        itemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        } items-center gap-8 md:gap-16 lg:gap-24 relative`}
      >
        {/* Decorative Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-green-200 transform -translate-x-1/2 hidden md:block"></div>
        
        {/* Content Side */}
        <div 
          className={`flex-1 space-y-6 relative z-10 bg-white p-6 md:p-8 lg:p-10 rounded-xl transition-all duration-500 ${
            isHovered ? 'shadow-xl -translate-y-2' : 'shadow-md'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center">
            <span className="inline-block w-10 h-10 bg-green-100 rounded-full text-center leading-10 text-xl mr-3">
              {priority.icon}
            </span>
            <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
              isHovered ? 'text-green-600' : 'text-gray-800'
            }`}>
              {priority.title}
            </h3>
          </div>
          
          <div className={`w-16 h-1 bg-green-400 rounded-full transition-all duration-500 ${
            isHovered ? 'w-32 bg-green-500' : ''
          }`}></div>
          
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {priority.description}
          </p>
          
          <div className={`transition-all duration-500 transform ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-500">
              <span>Pelajari lebih lanjut</span>
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="flex-1">
          <div className={`overflow-hidden rounded-lg transition-all duration-500 ${
            isHovered ? 'shadow-2xl' : 'shadow-xl'
          }`}>
            <img
              src={priority.image}
              alt={priority.title}
              className={`w-full h-full object-cover transition-all duration-700 rounded-lg ${
                isHovered ? 'scale-110 brightness-110' : 'scale-100'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priorities;