import React, { useState } from 'react';
import { Globe, Search, Target, Share2, ShoppingBag, Users, Weight, Presentation } from 'lucide-react';

const ServiceCard = ({ title, icon: Icon, description }) => {
  return (
    <div className="group h-[310px] w-full perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front Side */}
        <div className="absolute backface-hidden w-full h-full">
          <div className="flex flex-col items-center justify-center text-center h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container with Float Effect */}
            <div className="relative transform -translate-y-4 group-hover:-translate-y-6 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-full">
                <Icon className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* Title with Float Effect */}
            <h3 className="mt-8 text-2xl font-bold text-white transform -translate-y-2 group-hover:-translate-y-4 transition-transform duration-500">
              {title}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
          <div className="flex flex-col items-center justify-center text-center h-full bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
            
            {/* Content with Float Effect */}
            <div className="relative space-y-4 transform translate-z-10">
              <Icon className="w-10 h-10 text-blue-400 mx-auto mb-4 transform hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Services() {
  const services = [
    {
      title: "Web Designing",
      icon: Globe,
      description: "We design stunning and professional websites of various sizes and types. All our sites are cross-compatible and future-proofed."
    },
    {
      title: "SEO Services",
      icon: Search,
      description: "Get your website found on the major search engines using our professional search engine optimization services."
    },
    {
      title: "Paid Marketing",
      icon: Target,
      description: "We can assist you with your strategy, from targeted paid advertising campaigns to Google AdWords and beyond."
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      description: "Promote your products and services on all social media platforms with our professional social media marketing service."
    },
    {
      title: "E-Commerce Websites",
      icon: ShoppingBag,
      description: "Launch your online store with our e-commerce design services. We specialize in WooCommerce, Shopify, WordPress, WIX, and other similar platforms."
    },
    {
      title: "Lead Generation",
      icon: Users,
      description: "Our team can help generate more leads for you; we are highly experienced in various types of lead generation."
    },
    {
      title: "Digital Strategy and Planning",
      icon: Weight,
      description: "We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue."
    },
    {
      title: "Branding & Identity",
      icon: Presentation,
      description: "Think Grow Media specializes in crafting unique branding and logo designs that capture the essence of your business. We collaborate with you to create a memorable brand identity that resonates with your audience and stands out in the marketplace."
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, showAll ? services.length : 6).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={toggleShow}
            className="text-white font-semibold hover:text-white focus:outline-none bg-blue-700 px-10 py-5 rounded-full"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
