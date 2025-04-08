import { useState, useMemo } from 'react';
import { Heart, Search, TrendingUp, Sparkles } from 'lucide-react';

// Products data moved outside component to prevent recreation on renders
const products = [
  {
    id: 1,
    name: "Gramoxone 276 SL",
    activeIngredient: "Parakuat Diklorida 276 g/l",
    category: "Herbisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 245,
    trending: false
  },
  {
    id: 2,
    name: "Bion M 1/48 WP",
    activeIngredient: "Asibensolar S Metil 1%, Mankozeb 48%",
    category: "Fungisida",
    image: `${import.meta.env.BASE_URL}images/products/bion.jpg`,
    isNew: false,
    brand: "Syngenta",
    likes: 187,
    trending: true
  },
  {
    id: 3,
    name: "Plenum 50 WG",
    activeIngredient: "Pimetrozin 50%",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 126,
    trending: false
  },
  {
    id: 4,
    name: "Matador 25 EC",
    activeIngredient: "Lamda Sihalotrin 25 g/l",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 324,
    trending: true
  },
  {
    id: 5,
    name: "Revus 250 SC",
    activeIngredient: "Mandipropamid 250 g/l",
    category: "Fungisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 94,
    trending: false
  },
  {
    id: 6,
    name: "Score 250 EC",
    activeIngredient: "Difenokonazol 250 g/l",
    category: "Fungisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 156,
    trending: false
  },
  {
    id: 7,
    name: "Pegasus 500 SC",
    activeIngredient: "Diafentiuron 500 g/l",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 112,
    trending: false
  },
  {
    id: 8,
    name: "Agrimec 18 EC",
    activeIngredient: "Abamektin 18 g/l",
    category: "Insektisida",
    image: `${import.meta.env.BASE_URL}images/products/agrimec.webp`,
    isNew: false,
    brand: "Syngenta",
    likes: 289,
    trending: true
  },
  {
    id: 9,
    name: "Alika 247 ZC",
    activeIngredient: "Tiametoksam 141 g/l, Lamda Sihalotrin 106 g/l",
    category: "Insektisida",
    image: `${import.meta.env.BASE_URL}images/products/alika.webp`,
    isNew: false,
    brand: "Syngenta",
    likes: 176,
    trending: false
  },
  {
    id: 10,
    name: "Amistar Top 325 SC",
    activeIngredient: "Azoksistrobin 200 g/l, Difenokonazol 125 g/l",
    category: "Fungisida",
    image: `${import.meta.env.BASE_URL}images/products/amistar.jpg`,
    isNew: false,
    brand: "Syngenta",
    likes: 302,
    trending: true
  },
  {
    id: 11,
    name: "Curacron 500 EC",
    activeIngredient: "Profenofos 500 g/l",
    category: "Insektisida",
    image: `${import.meta.env.BASE_URL}images/products/curacron.jpg`,
    isNew: false,
    brand: "Syngenta",
    likes: 133,
    trending: false
  },
  {
    id: 12,
    name: "Cymbush 50 EC",
    activeIngredient: "Sipermetrin 50 g/l",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 148,
    trending: false
  },
  {
    id: 13,
    name: "Elestal Neo 30/24 WG",
    activeIngredient: "Spiropidion 30%, Acetamiprid 24%",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: true,
    brand: "Syngenta",
    likes: 415,
    trending: true
  },
  {
    id: 14,
    name: "Filia 525 SE",
    activeIngredient: "Trisiklazol 400 g/l, Propikonazol 125 g/l",
    category: "Fungisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 167,
    trending: false
  },
  {
    id: 15,
    name: "Calaris 550 SC",
    activeIngredient: "Mesotrion 50 g/l, Atrazin 500 g/l",
    category: "Herbisida",
    image: `${import.meta.env.BASE_URL}images/products/calaris.jpg`,
    isNew: false,
    brand: "Syngenta",
    likes: 189,
    trending: false
  },
  {
    id: 16,
    name: "Cruiser 350 FS",
    activeIngredient: "Tiametoksam 350 g/l",
    category: "Perlakuan Benih",
    image: `${import.meta.env.BASE_URL}images/products/cruiser.jpg`,
    isNew: false,
    brand: "Syngenta",
    likes: 211,
    trending: false
  },
  {
    id: 17,
    name: "Fortenza 600 FS",
    activeIngredient: "Siantraniliprol 600 g/l",
    category: "Perlakuan Benih",
    image: "/api/placeholder/300/300",
    isNew: true,
    brand: "Syngenta",
    likes: 378,
    trending: true
  },
  {
    id: 18,
    name: "Tiguan 500 SC",
    activeIngredient: "Tebukonazol 500 g/l",
    category: "Fungisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 142,
    trending: false
  },
  {
    id: 19,
    name: "Zypar 100 SC",
    activeIngredient: "Flonikamid 100 g/l",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 198,
    trending: false
  },
  {
    id: 20,
    name: "Zypar 200 SC",
    activeIngredient: "Flonikamid 200 g/l",
    category: "Insektisida",
    image: "/api/placeholder/300/300",
    isNew: false,
    brand: "Syngenta",
    likes: 245,
    trending: false
  }
];

// Extract unique categories for filter buttons
const categories = ['Semua', ...new Set(products.map(product => product.category))];

// ProductCard component to reduce repetition
const ProductCard = ({ product, isLiked, onLikeToggle }: { product: typeof products[0]; isLiked: boolean; onLikeToggle: (id: number) => void }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      {product.isNew && (
        <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center">
          <Sparkles size={14} className="mr-1" />
          TERBARU
        </div>
      )}
      {product.trending && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center">
          <TrendingUp size={14} className="mr-1" />
          TRENDING
        </div>
      )}
    </div>
    
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-bold text-gray-500">{product.brand}</div>
        <div className="flex items-center text-xs">
          <Heart 
            size={16} 
            className={`mr-1 cursor-pointer ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`} 
            onClick={() => onLikeToggle(product.id)}
          />
          {product.likes}
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-1 line-clamp-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.activeIngredient}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-xs bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-medium">
          {product.category}
        </span>
        <button className="bg-gradient-to-br from-green-400 to-blue-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105">
          Lihat Detail
        </button>
      </div>
    </div>
  </div>
);

// Filter button component
import { ReactNode } from 'react';

const FilterButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) => (
  <button 
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
      active 
      ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md' 
      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

function Product() {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Use useMemo to optimize filtering
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
      ? prev.filter(id => id !== productId) 
      : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/banner4.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Produk</span> Kami
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Temukan solusi pertanian modern yang ramah lingkungan untuk hasil panen maksimal. #PertanianCerdas 🌱
          </p>
        </div>
      </section>


      {/* Search Bar */}
      <div className="container mx-auto px-4 py-10 -mt-4">
        <div className="bg-white rounded-full shadow-lg px-4 py-3 flex items-center">
          <Search size={20} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Cari produk..." 
            className="ml-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
            <FilterButton 
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl font-medium text-gray-500">No products found. Try different filters!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                isLiked={likedProducts.includes(product.id)}
                onLikeToggle={toggleLike}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;