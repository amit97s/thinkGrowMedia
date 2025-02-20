import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">DigitalGrowth</h3>
          <p className="text-gray-400 leading-relaxed">
            Transforming businesses through innovative digital marketing solutions. Your success is our priority.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/peopleoftgm" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Portfolio', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center group text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            {[
              'Website Development',
              'SEO',
              'Content',
              'Ads'
            ].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="flex items-center group text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
          <div className="flex items-start space-x-3 text-gray-400">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <p>Tower C, Noida One -Noida </p>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <Phone className="w-5 h-5" />
            <p>+91 (798)-235-1138 </p>
          </div>
          <div className="flex items-center space-x-3 text-gray-400">
            <Mail className="w-5 h-5" />
            <p>info@thinkgrowmedia.com</p>
          </div>
          
          {/* Newsletter */}
          {/* <div className="mt-6">
            <h5 className="text-white font-semibold mb-2">Subscribe to our newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} DigitalGrowth. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;