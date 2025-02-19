import React, { useState, useEffect } from "react";
import { Building2, Code2, Gem, Globe, Laptop, Rocket, Star } from "lucide-react";

function Website() {
  const [visibleCards, setVisibleCards] = useState(6);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      name: "TechCorp Solutions",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Corporate Website"
    },
    {
      id: 2,
      name: "EcoGreen Store",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      category: "E-commerce"
    },
    {
      id: 3,
      name: "Artisan Gallery",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
      category: "Portfolio"
    },
    {
      id: 4,
      name: "FoodieHub",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      category: "Restaurant"
    },
    {
      id: 5,
      name: "HealthCare Plus",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      category: "Healthcare"
    },
    {
      id: 6,
      name: "EduLearn Platform",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      category: "Education"
    },
    {
      id: 7,
      name: "FitLife Gym",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      category: "Fitness"
    },
    {
      id: 8,
      name: "TravelWise",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      category: "Travel"
    },
    {
      id: 9,
      name: "Creative Studio",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      category: "Creative Agency"
    },
    {
      id: 10,
      name: "Tech Innovate",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      category: "Technology"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "Global Reach",
      description: "Connect with customers worldwide through optimized web solutions"
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-600" />,
      title: "Fast Performance",
      description: "Lightning-quick load times and smooth user experience"
    },
    {
      icon: <Laptop className="w-12 h-12 text-purple-600" />,
      title: "Responsive Design",
      description: "Perfect display across all devices and screen sizes"
    },
    {
      icon: <Code2 className="w-12 h-12 text-purple-600" />,
      title: "Clean Code",
      description: "Maintainable and scalable codebase for future growth"
    },
    {
      icon: <Building2 className="w-12 h-12 text-purple-600" />,
      title: "SEO Optimized",
      description: "Built to rank higher in search engine results"
    },
    {
      icon: <Gem className="w-12 h-12 text-purple-600" />,
      title: "Premium Support",
      description: "24/7 expert assistance for your website needs"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      quote: "Think Grow Media transformed our online presence completely. Their attention to detail and innovative approach helped us increase our conversion rate by 150%.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, EcoGreen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      quote: "The team's expertise in web development is unmatched. They delivered a website that exceeded our expectations and helped us establish a strong digital presence.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, Artisan Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      quote: "Working with Think Grow Media was a game-changer for our business. Their creative solutions and technical expertise helped us stand out in a competitive market.",
      rating: 5
    }
  ];

  const handleToggle = () => {
    setVisibleCards(prev => prev === 6 ? 10 : 6);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)"
          }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Website Excellence with Tik Grow Media
          </h1>
          <p className={`text-xl md:text-2xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          At Tik Grow Media, we specialize in designing and developing high-quality, user-friendly websites that not only enhance your brand’s online presence but also drive engagement and business growth through innovative and tailored digital solutions.
          </p>
          <button className={`bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Our Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.slice(0, visibleCards).map((card) => (
              <div
                key={card.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-purple-600 text-sm font-medium">{card.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">{card.name}</h3>
                  <p className="text-gray-600 mt-1">{card.location}</p>
                </div>
              </div>
            ))}
          </div>
          {cards.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={handleToggle}
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                {visibleCards === 6 ? "View More Projects" : "Show Less"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Think Grow Media
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  At Think Grow Media (TGM), we understand that your website is often the first impression customers will have of your business. That's why we focus on building websites that not only look great but also offer a seamless user experience.
                </p>
                <p className="mb-4">
                  Our team of skilled designers and developers combines creativity with technical proficiency to craft responsive, high-performance websites that are easy to navigate and engage users. With a deep understanding of modern web technologies, we specialize in building scalable solutions that grow with your business.
                </p>
                <p>
                  When you choose TGM, you're partnering with a company that prioritizes your needs, listens to your vision, and ensures your website stands out in the digital world. Trust us to help you succeed online, from concept to launch and beyond.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-8 rounded-xl">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="max-w-3xl mx-auto">
                      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <div className="flex justify-center md:justify-start gap-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <blockquote className="text-xl text-gray-700 italic mb-6">
                              "{testimonial.quote}"
                            </blockquote>
                            <div className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-purple-600">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-purple-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Website;