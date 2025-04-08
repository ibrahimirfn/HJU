import { Search, ChevronRight, ChevronLeft, Image as ImageIcon, Award, FileText, Newspaper } from 'lucide-react';
import { useState } from 'react';

interface Article {
  id?: number;
  title: string;
  date: string;
  description?: string;
  image: string;
  featured?: boolean;
}

interface Award {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface FinancialReport {
  id: number;
  title: string;
  date: string;
  fileSize: string;
  downloadUrl: string;
}

const ArticleCard = ({ article }: { article: Article }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full ${isHovered ? 'shadow-xl -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
        />
        <div className="absolute top-0 right-0 bg-gradient-to-l from-green-600 to-blue-500 text-white text-xs px-3 py-1">
          {article.date}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 transition-colors duration-300 hover:text-green-600">{article.title}</h2>
        {article.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        )}
        <button className="group inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors duration-300">
          <span>Baca selengkapnya</span>
          <ChevronRight className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

const FeaturedArticle = ({ article }: { article: Article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 mb-12">
      <div className="md:flex">
        <div className="md:w-1/3 relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium rounded-full">
            🔥 Artikel Unggulan
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{article.date}</p>
          <p className="text-gray-600 mb-6">{article.description}</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
            <span>Baca Selengkapnya</span>
            <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AwardCard = ({ award }: { award: Award }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full ${isHovered ? 'shadow-xl -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={award.image}
          alt={award.title}
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
        />
        <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-orange-500 text-white text-xs px-3 py-1">
          {award.date}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 transition-colors duration-300 hover:text-yellow-600">{award.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{award.description}</p>
        <button className="group inline-flex items-center text-yellow-600 font-medium hover:text-yellow-800 transition-colors duration-300">
          <span>Lihat detail</span>
          <ChevronRight className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

const GalleryCard = ({ item }: { item: GalleryItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium">{item.title}</h3>
        <span className="text-gray-300 text-sm">{item.category}</span>
      </div>
    </div>
  );
};

const FinancialReportCard = ({ report }: { report: FinancialReport }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center">
      <div className="bg-blue-50 p-3 rounded-full">
        <FileText className="w-6 h-6 text-blue-500" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="font-medium text-gray-800">{report.title}</h3>
        <p className="text-gray-500 text-sm">{report.date} • {report.fileSize}</p>
      </div>
      <a href={report.downloadUrl} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
        Unduh
      </a>
    </div>
  );
};

const PaginationButton = ({ children, active = false, disabled = false }: { children: React.ReactNode, active?: boolean, disabled?: boolean }) => {
  const baseClasses = "py-2 px-4 text-sm font-medium border transition-all duration-300";
  const activeClasses = "bg-gradient-to-r from-green-400 to-blue-500 border-transparent text-white";
  const inactiveClasses = "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
  const disabledClasses = "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed";
  
  return (
    <a href="#" className={`${baseClasses} ${active ? activeClasses : disabled ? disabledClasses : inactiveClasses}`}>
      {children}
    </a>
  );
};

const Information = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("berita");
  
  const articles: Article[] = [
    {
      id: 1,
      title: "Mulai Implementasi Program Interaksi di Jawa Barat, Eratani Gencarkan Edukasi Teknologi untuk Tingkatkan...",
      date: "30 Januari 2025",
      description: "Eratani fokus pada peningkatan produktivitas lahan dan kesejahteraan petani melalui penerapan teknologi modern. Program ini melibatkan edukasi langsung kepada para petani tentang penggunaan teknologi tepat guna dan metode pertanian presisi...",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Hari Ibu: Mengenal Lebih Dekat Peran Perempuan dalam Pertanian Modern",
      date: "20 Desember 2024",
      description: "Mengangkat cerita inspiratif para perempuan tangguh di balik kemajuan pertanian Indonesia dan kontribusi mereka dalam inovasi pertanian berkelanjutan.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Desa Jatisari, Karawang Jadi Contoh Masa Depan Pertanian Indonesia",
      date: "12 Desember 2024",
      description: "Transformasi desa berbasis pertanian konvensional menjadi smart farming village dengan implementasi IoT dan analisis data untuk meningkatkan hasil panen.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Eratani dan Dinas Tanaman Pangan, Hortikultur Jalin Kerja Sama Strategis",
      date: "5 Desember 2024",
      description: "Kolaborasi antara sektor publik dan swasta untuk mendorong adopsi teknologi pertanian dan mengembangkan program pendampingan untuk petani lokal.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "5 Teknologi Pertanian Canggih, Bantu Budidaya Tanaman Lebih Efisien",
      date: "1 Desember 2024",
      description: "Dari drone pemantau kesehatan tanaman hingga sensor tanah pintar, teknologi ini siap merevolusi cara petani mengelola lahan pertanian.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "HMTE Unsoed PPK ORWMAWA mengembangkan pertanian presisi berbasis AI",
      date: "1 Desember 2024",
      description: "Program mahasiswa Teknik Elektro Unsoed menghasilkan sistem pertanian presisi berbasis kecerdasan buatan yang mampu memprediski hasil panen.",
      image: "/api/placeholder/400/200"
    }
  ];

  const awards: Award[] = [
    {
      id: 1,
      title: "Penghargaan Inovasi Teknologi Pertanian Terbaik 2024",
      date: "15 November 2024",
      description: "Penghargaan prestisius dari Kementerian Pertanian untuk inovasi teknologi yang berhasil meningkatkan produktivitas pertanian secara signifikan.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Top Digital Transformation in Agriculture 2024",
      date: "20 Oktober 2024",
      description: "Penghargaan dari Digital Innovation Summit yang mengakui keberhasilan implementasi transformasi digital di sektor pertanian.",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Social Impact Award: Pemberdayaan Petani Daerah Terpencil",
      date: "5 September 2024",
      description: "Penghargaan yang diberikan atas dedikasi dalam memberdayakan petani di daerah terpencil melalui program pelatihan dan akses teknologi.",
      image: "/api/placeholder/400/200"
    }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Pelatihan Petani Karawang",
      image: "/api/placeholder/400/300",
      category: "Edukasi"
    },
    {
      id: 2,
      title: "Panen Raya Padi Cianjur",
      image: "/api/placeholder/400/300",
      category: "Panen"
    },
    {
      id: 3,
      title: "Implementasi Smart Farming",
      image: "/api/placeholder/400/300",
      category: "Teknologi"
    },
    {
      id: 4,
      title: "Kunjungan ke Sentra Pertanian",
      image: "/api/placeholder/400/300",
      category: "Kunjungan"
    },
    {
      id: 5,
      title: "Workshop Pertanian Berkelanjutan",
      image: "/api/placeholder/400/300",
      category: "Workshop"
    },
    {
      id: 6,
      title: "Forum Petani Jawa Barat",
      image: "/api/placeholder/400/300",
      category: "Forum"
    }
  ];

  const financialReports: FinancialReport[] = [
    {
      id: 1,
      title: "Laporan Keuangan Tahunan 2024",
      date: "31 Desember 2024",
      fileSize: "2.5 MB",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Laporan Keuangan Q3 2024",
      date: "30 September 2024",
      fileSize: "1.8 MB",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Laporan Keuangan Q2 2024",
      date: "30 Juni 2024",
      fileSize: "1.7 MB",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Laporan Keuangan Q1 2024",
      date: "31 Maret 2024",
      fileSize: "1.6 MB",
      downloadUrl: "#"
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const navigationItems = [
    { name: 'Berita', icon: <Newspaper className="w-5 h-5" />, id: 'berita' },
    { name: 'Penghargaan', icon: <Award className="w-5 h-5" />, id: 'penghargaan' },
    { name: 'Galeri', icon: <ImageIcon className="w-5 h-5" />, id: 'galeri' },
    { name: 'Laporan Keuangan', icon: <FileText className="w-5 h-5" />, id: 'laporan-keuangan' }
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Header Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/farmer.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Info</span> Pertanian
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Temukan berita terbaru dan informasi terkini seputar dunia pertanian dan dapatkan berita terbarunya! 🌱📰
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Search Section */}
        <div className="flex justify-center -mt-16 mb-12">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="bg-white rounded-full shadow-xl flex overflow-hidden p-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari informasi pertanian..."
                className="w-full px-5 py-3 focus:outline-none text-gray-700"
              />
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300 flex items-center">
                <Search className="w-5 h-5" />
                <span className="ml-2 hidden md:inline">Cari</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Berita Section */}
        {activeTab === "berita" && (
          <div>
            {/* Featured Article */}
            {featuredArticle && <FeaturedArticle article={featuredArticle} />}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow-md overflow-hidden">
                <PaginationButton disabled={true}>
                  <ChevronLeft className="w-4 h-4" />
                </PaginationButton>
                <PaginationButton active={true}>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationButton>
                  <ChevronRight className="w-4 h-4" />
                </PaginationButton>
              </nav>
            </div>
          </div>
        )}

        {/* Penghargaan Section */}
        {activeTab === "penghargaan" && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Penghargaan & Pencapaian</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Berbagai penghargaan dan pengakuan yang telah kami terima atas dedikasi dan inovasi dalam mengembangkan sektor pertanian Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award) => (
                <AwardCard key={award.id} award={award} />
              ))}
            </div>
          </div>
        )}

        {/* Galeri Section */}
        {activeTab === "galeri" && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Kegiatan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dokumentasi visual dari berbagai kegiatan, program, dan inisiatif yang kami laksanakan di berbagai daerah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-10">
              <button className="bg-white border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-lg transition-colors duration-300">
                Muat Lebih Banyak
              </button>
            </div>
          </div>
        )}

        {/* Laporan Keuangan Section */}
        {activeTab === "laporan-keuangan" && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Laporan Keuangan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Laporan keuangan kami yang mencerminkan transparansi dan akuntabilitas dalam pengelolaan sumber daya.
              </p>
            </div>
            <div className="space-y-4">
              {financialReports.map((report) => (
                <FinancialReportCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        )}
        
        {/* Newsletter */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Get the latest info!</h3>
              <p className="text-gray-600">Subscribe untuk dapetin update pertanian terkini langsung ke inbox kamu.</p>
            </div>
            <div className="md:w-1/2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Masukkan email kamu"
                  className="w-full px-4 py-3 rounded-l-md border-2 border-gray-200 focus:outline-none focus:border-green-400"
                />
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-r-md hover:shadow-lg transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;