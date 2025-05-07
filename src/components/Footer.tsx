import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    information: [
      { name: 'Berita', href: '/informasi/' },
      { name: 'Penghargaan', href: '/informasi/' },
      { name: 'Galeri', href: '/informasi/' },
      { name: 'Laporan Keuangan', href: '/informasi/' }
    ],
    product: [
      { name: 'Pestisida', href: '/produk/' },
      { name: 'Pupuk', href: '/produk/' },
      { name: 'Alat Pertanian', href: '/produk/' },
      { name: 'Perlakuan Benih', href: '/produk/' },
      { name: 'Herbisida', href: '/produk/' },
      { name: 'Fungisida', href: '/produk/' },
      { name: 'Insektisida', href: '/produk/' },
    ],
    about: [
      { name: 'Profil Perusahaan', href: '/tentang-kami/' },
      { name: 'Profil Direksi', href: '/tentang-kami/' },
      { name: 'Visi Misi', href: '/tentang-kami/' },
      { name: 'Sejarah', href: '/tentang-kami/' },
      { name: 'Kontak Kami', href: '/tentang-kami/' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/hibridajayautama" },
    { icon: Facebook, href: "https://facebook.com/hibridajayautama" },
    { icon: Youtube, href: "https://youtube.com/hibridajayautama" }
  ];

  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Logo"
                className="w-32"
              />
            </Link>
            <p className="text-sm opacity-90">
              Jl. Kali Pepe III No. 58, Pudakpayung, Banyumanik, 
              Kota Semarang, Jawa Tengah
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:pl-1 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Produk</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:pl-1 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:pl-1 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">© 2025 | Hibrida Jaya Utama</p>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-90 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;