import React, { useState } from 'react';
import { Send, Instagram, Twitter, MapPin, Mail, Phone, AlertCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, handle: '@eratani.id', color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500' },
    { name: 'TikTok', icon: '📱', handle: '@eratani_official', color: 'bg-black' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, handle: '@eratani', color: 'bg-blue-400' },
  ];

  const emojis = ["🌱", "🔥", "✨", "💯", "👀", "🙌", "🚀"];
  const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/banner3.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
      <div className="relative container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Kontak</span> Kami
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Temukan solusi pertanian modern yang ramah lingkungan untuk hasil panen maksimal. #PertanianCerdas 🌱
        </p>
      </div>
    </section>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>Kontak</span>
                <span>{randomEmoji()}</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-medium">hi@eratani.id</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telepon</p>
                    <p className="text-lg font-medium">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="text-lg font-medium">Jl. Coolest Place Ever No. 123, Jakarta</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>media sosial kami</span>
                <span>👾</span>
              </h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`flex items-center gap-3 p-4 rounded-2xl text-white ${social.color} hover:opacity-90 transition-opacity`}
                  >
                    <div className="bg-white/20 p-2 rounded-full">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm opacity-90">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Masukkan pesan</h2>
              
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-700">Thanks for your message! We'll get back to you ASAP</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-1">
                    <span>your name</span>
                    <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="what should we call you?"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-1">
                    <span>your email</span>
                    <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="so we can slide back into your inbox"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 flex items-center gap-1">
                    <span>your message</span>
                    <span className="text-green-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500">kirim pesan apapun</p>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="hey there! i was wondering about..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    rows={6}
                    required
                  />
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <AlertCircle className="w-4 h-4" />
                  <p>kami akan merespon secepatnya</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-4 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <span>Kirim</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;