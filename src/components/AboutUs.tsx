import { ArrowRight, Award, Calendar, MapPin, User, Users, ChevronRight, Sparkles, Zap, Flame, Heart, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

// Define the types for TimelineItem props
interface TimelineItemProps {
  year: string;
  title: string;
  content: string;
  isLeft: boolean;
}

const Badge = ({ children, color }: { children: React.ReactNode, color: string }) => {
  const colorClasses = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
      {children}
    </span>
  );
};

// Enhanced Timeline Item with animations and cooler effects
const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, content, isLeft }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hidden md:block w-1/2"></div>
      
      <div className={`absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 ${isHovered ? 'bg-purple-500 scale-125' : 'bg-green-500'} rounded-full border-4 border-white z-10 transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}></div>
      
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} p-4`}>
        <div className={`bg-white p-6 rounded-xl ${isHovered ? 'shadow-xl -translate-y-1' : 'shadow-md'} transition-all duration-300`}>
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-full font-bold mb-3 flex items-center">
            <Sparkles size={14} className="mr-1" />
            {year}
          </span>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

// Define the types for ValueCard props
interface ValueCardProps {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

// Enhanced Value Card with more animations
const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-green-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        <div className="p-3 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-full text-white group-hover:animate-pulse">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-600 transition-all duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Accordion component for FAQ
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <ChevronRight className={`w-5 h-5 text-green-500 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="px-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner2.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tentang</span> Kami
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Distributor produk pertanian yang terpercaya. Kami hadir untuk mendukung petani Indonesia dengan produk berkualitas tinggi dan layanan terbaik. 🌱
          </p>
        </div>
      </section>

      {/* Directur */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-400 to-blue-500 text-white mb-4">
              <User size={14} className="mr-1" />
              Meet Our CEO
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Assalamualaikum
            </h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Ir. Ghomsony
            </h3>
            <p className="text-green-600 text-lg mb-4">
              Direktur Utama PT. Hibrida Jaya Utama
            </p>
            <p className="text-gray-600 text-md mb-2">
              Santri yang Memilih Jalan Perjuangan
            </p>
            <p className="text-gray-600 text-md max-w-md">
              Lahir di Temanggung pada 30 Oktober 1970, tumbuh dalam keluarga religius dan lingkungan pesantren yang membentuknya menjadi sosok berintegritas tinggi. Setelah berkarier di berbagai perusahaan, ia akhirnya memilih jalur yang lebih menantang dengan mendirikan PT. Hibrida Jaya Utama, perusahaan distributor obat dan alat pertanian.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/images/Ghomsony.png" 
                alt="Ir. Ghomsony" 
                className="relative rounded-lg shadow-lg w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="our-story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 rounded-xl overflow-hidden shadow-xl transform hover:rotate-1 transition-transform duration-500">
              <img
                src="/images/hju.jpg"
                alt="Kantor PT. Hibrida Jaya Utama"
                className="w-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <Badge color="blue">
                  <Flame size={12} className="mr-1" />
                  Company HQ
                </Badge>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-2">
                <TrendingUp size={20} className="text-green-500" />
                <h2 className="text-3xl font-bold text-gray-800">
                  PT. Hibrida Jaya Utama
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
              <p className="text-gray-600 leading-relaxed">
                Sejak 2008, kita udah jadi distributor pilihan para petani untuk produk pertanian yang next level! Komitmen kita? Bikin sektor pertanian di Indonesia makin keren lewat produk dan layanan premium.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan jaringan distribusi yang merajalela, kita udah layani ribuan petani dan ratusan kios pertanian di Jawa Tengah, Papua, dan Papua Barat. Bangga banget jadi bagian dari ekosistem pertanian Indonesia dan terus berusaha bawa dampak positif buat petani dan industri pertanian!
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mr-1">15+</span> Tahun Pengalaman
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mr-1">3</span> Provinsi
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full flex items-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mr-1">1000+</span> Petani
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <Badge color="purple">
                <Star size={12} className="mr-1" />
                Our Guiding Principles
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Visi & Misi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visi dan misi kita yang selalu jadi pegangan dalam setiap langkah kita di dunia pertanian! 🌱🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-500 group">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white mr-3 group-hover:animate-pulse">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Visi</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Jadi distributor produk pertanian yang paling terpercaya dan inovatif di Indonesia, dengan fokus pada kualitas, keberlanjutan, dan kemitraan yang saling menguntungkan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500 group">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white mr-3 group-hover:animate-pulse">
                  <Zap size={18} />
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Misi</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1 text-white flex items-center justify-center mt-1 mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <span>
                    Distribusi produk pertanian berkualitas tinggi ke petani dan distributor di seluruh Indonesia
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1 text-white flex items-center justify-center mt-1 mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <span>
                    Berikan layanan pelanggan yang luar biasa dan dukungan teknis untuk memastikan kepuasan petani
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1 text-white flex items-center justify-center mt-1 mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <span>
                    Kembangkan kemitraan yang kuat dengan petani, distributor, dan produsen untuk menciptakan ekosistem pertanian yang berkelanjutan
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1 text-white flex items-center justify-center mt-1 mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <span>
                    Investasi dalam inovasi dan teknologi untuk meningkatkan efisiensi dan produktivitas pertanian
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <Badge color="pink">
                <Heart size={12} className="mr-1" />
                What We Stand For
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nilai-nilai Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang selalu kita pegang dalam setiap langkah 💯
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <ValueCard 
              icon={<Award className="h-8 w-8" />}
              title="Kualitas"
              description="Selalu ngasih produk dan layanan premium, gak ada kata kompromi!"
            />
            
            <ValueCard 
              icon={<Users className="h-8 w-8" />}
              title="Kemitraan"
              description="Bangun hubungan win-win dengan petani, distributor, dan semua stakeholder."
            />
            
            <ValueCard 
              icon={<Calendar className="h-8 w-8" />}
              title="Keberlanjutan"
              description="Support praktik pertanian yang ramah lingkungan demi masa depan yang lebih hijau."
            />
            
            <ValueCard 
              icon={<User className="h-8 w-8" />}
              title="Integritas"
              description="Junjung tinggi kejujuran, transparansi, dan etika dalam setiap aspek bisnis kita."
            />
          </div>
        </div>
      </section>


      {/* Timeline & History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <Badge color="yellow">
                <TrendingUp size={12} className="mr-1" />
                Our Story
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sejarah Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sejarah singkat berdirinya PT. Hibrida Jaya Utama dan perjalanan kita dalam dunia pertanian Indonesia 🌾
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 via-blue-300 to-purple-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <TimelineItem 
                year="2008" 
                title="First Launch!"
                content="PT. Hibrida Jaya Utama didirikan oleh Ir. Ghomsony dengan fokus awal pada distribusi obat-obatan pertanian di wilayah Jawa Tengah."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2012" 
                title="Level Up: Product Expansion"
                content="Nambah lini produk dengan peralatan pertanian modern buat memenuhi kebutuhan petani yang makin berkembang."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2015" 
                title="Territory Expansion"
                content="Buka kantor cabang baru dan perluas jaringan distribusi ke berbagai kabupaten di Jawa Tengah."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2019" 
                title="Going East!"
                content="Expand layanan sampe ke Papua dan Papua Barat, bawa solusi pertanian modern ke Indonesia timur."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2022" 
                title="Digital Revolution"
                content="Launch platform digital HAS Pertanian buat memudahkan petani akses produk dan info pertanian terkini."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2025" 
                title="Current Vibe"
                content="Terus inovasi dan perkuat komitmen untuk memajukan pertanian Indonesia dengan produk premium dan layanan terbaik."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <Badge color="green">
                <Flame size={12} className="mr-1" />
                Got Questions?
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              FAQ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pertanyaan yang sering ditanyain tentang kita 🤔
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <AccordionItem 
              question="Apa aja sih produk yang kalian distribusikan?"
              answer="Kita distribusikan berbagai produk pertanian mulai dari benih berkualitas tinggi, pupuk, pestisida, hingga alat-alat pertanian modern. Semua produk kita pilih dari produsen terpercaya dan sudah teruji kualitasnya."
              isOpen={openAccordion === 0}
              onClick={() => toggleAccordion(0)}
            />
            <AccordionItem 
              question="Gimana cara jadi mitra distributor?"
              answer="Gampang banget! Kamu bisa hubungi tim kami melalui halaman kontak atau langsung datang ke kantor kita. Tim kami akan bantu jelasin persyaratan dan proses untuk jadi mitra distributor. We're super welcome to new partnership!"
              isOpen={openAccordion === 1}
              onClick={() => toggleAccordion(1)}
            />
            <AccordionItem 
              question="Apa kalian ada program edukasi untuk petani?"
              answer="Pastinya! Kita punya berbagai program edukasi mulai dari workshop, pelatihan, hingga pendampingan langsung di lapangan. Semua program ini dirancang untuk membantu petani menerapkan teknik pertanian modern yang lebih efisien dan produktif."
              isOpen={openAccordion === 2}
              onClick={() => toggleAccordion(2)}
            />
            <AccordionItem 
              question="Bisa gak sih pesan produk secara online?"
              answer="Bisa dongg! Kamu bisa akses platform digital kita, HAS Pertanian, untuk melihat katalog produk dan melakukan pemesanan online. Platform ini juga nyediain berbagai info pertanian terkini yang pastinya berguna banget buat kamu."
              isOpen={openAccordion === 3}
              onClick={() => toggleAccordion(3)}
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <Badge color="blue">
                <MapPin size={12} className="mr-1" />
                Where To Find Us
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Temukan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami ada di beberapa lokasi strategis buat memudahkan kamu akses produk dan layanan kami. Kunjungi kantor kami atau hubungi kami untuk info lebih lanjut! 🌍
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
                <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  HQ Office
                </h3>
                <p className="text-gray-600 mb-2">
                  Jl. Kali Pepe III No. 58, Pudakpayung, Banyumanik, Kota Semarang, Jawa Tengah
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Call us:</span> (024) 7471234
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> info@hibridajayautama.co.id
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                <h3 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  Papua Branch
                </h3>
                <p className="text-gray-600 mb-2">
                  Jl. Raya Sentani No. 45, Sentani, Kabupaten Jayapura, Papua
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Call us:</span> (0967) 592178
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> info@hibridajayautama.co.id
                </p>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden h-full shadow-xl group">
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/images/loc.png" 
                  alt="Lokasi PT. Hibrida Jaya Utama" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <MapPin size={16} className="mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bergabung?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Mau Bergabung Dengan Kami? 🌱🚀
          </p>
          <a 
            href="kontak" 
            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Kontak Kami!
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;