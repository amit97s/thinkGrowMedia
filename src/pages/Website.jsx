import React, { useState, useEffect } from "react";
import {
  Building2,
  Code2,
  Gem,
  Globe,
  Laptop,
  Rocket,
  Star,
  X,
} from "lucide-react";
import {
  tgmf,
  leatnlabf,
  maacFinal,
  galendaGlobalfinal,
  bff,
  propHawk,
  tdc,
  co,
  diagolouis,
  dc,
  dr,
  ie,
  wordpress,
  shopify,
  coder,
} from "../assets";
import wt from "../assets/wt.svg";

function Website() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCards = [
    {
      id: 1,
      name: "MAAC CP",
      location: "Connaught Place",
      image: maacFinal,
      category: "Corporate Website",
      technology: "wordpress",
      link: "https://maaccp.com/",
    },
    {
      id: 2,
      name: "galena global",
      location: "India",
      image: galendaGlobalfinal,
      category: "E-commerce",
      technology: "wordpress",
      link: "https://galenaglobal.com/",
    },
    {
      id: 3,
      name: "Think Grow Media",
      location: "Noida India",
      image: tgmf,
      category: "Digital marketing",
      technology: "wordpress",
      link: "https://thinkgrowmedia.com/",
    },
    {
      id: 4,
      name: "MAAC Ghaziabad",
      location: "Connaught Place",
      image: maacFinal,
      category: "Corporate Website",
      technology: "wordpress",
      link: "https://www.maacgzb.com/",
    },
    {
      id: 5,
      name: "MAAC Karol Bagh",
      location: "Karol Bagh",
      image: maacFinal,
      category: "Corporate Website",
      technology: "wordpress",
      link: "https://www.maacgzb.com/",
    },
    {
      id: 6,
      name: "learnz Lab",
      location: "India",
      image: leatnlabf,
      category: "Corporate Website",
      technology: "wordpress",
      link: "https://learnzlab.in/",
    },
    {
      id: 7,
      name: "maac",
      location: "paschim vihar,India",
      image: maacFinal,
      category: "Corporate Website",
      technology: "wordpress",
      link: "https://maacpaschimvihar.com/",
    },
    {
      id: 8,
      name: "learnzlab",
      location: "India",
      image: leatnlabf,
      category: "Corporate Website",
      technology: "wordpress",
      link: "https://learnzlab.com/",
    },
    {
      id: 9,
      name: "diogolouis",
      location: "India",
      image: diagolouis,
      category: "Fashion",
      technology: "shopify",
      link: "https://www.diogolouis.com/",
    },
    {
      id: 10,
      name: "BEF",
      location: "Kerala",
      image: bff,
      category: "Organic Store",
      technology: "code",
      link: "https://bef.technopediasoft.com/",
    },
    {
      id: 11,
      name: "Imperial Emporio",
      location: "Noida,India",
      image: ie,
      category: "Business",
      technology: "wordpress",
      link: "https://imperialemporio.com/",
    },
    {
      id: 12,
      name: "Props Hawk",
      location: "Noida, India",
      image: propHawk,
      category: "Property",
      technology: "code",
      link: "https://www.prophawk.com/",
    },
    {
      id: 13,
      name: "Wafer Travel",
      location: "Gurgoan,India",
      image: wt,
      category: "Travel",
      technology: "code",
      link: "https://wafers.travel/",
    },
    {
      id: 14,
      name: "The Designer class",
      location: "Mumbai,India",
      image: dc,
      category: "Learning Platform",
      technology: "code",
      link: "https://www.thedesignersclass.com/",
    },
    {
      id: 15,
      name: "Dr. Preeti",
      location: "Noida,India",
      image: dr,
      category: "Surgeon",
      technology: "code",
      link: "https://drpreetiyadav.com/",
    },
  ];

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-purple-600" />,
      title: "WordPress Development",
      description:
        "Custom WordPress solutions tailored to your business needs with powerful features and easy content management.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-purple-600" />,
      title: "Shopify E-commerce",
      description:
        "Beautiful and conversion-focused Shopify stores that help you sell more and manage your business efficiently.",
    },
    {
      icon: <Code2 className="w-12 h-12 text-purple-600" />,
      title: "Custom Web Development",
      description:
        "Bespoke web applications built from scratch using modern technologies and best practices.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-600" />,
      title: "Performance Optimization",
      description:
        "Speed up your website for better user experience and higher search engine rankings.",
    },
    {
      icon: <Laptop className="w-12 h-12 text-purple-600" />,
      title: "Responsive Design",
      description:
        "Mobile-first websites that look and work perfectly on all devices and screen sizes.",
    },
    {
      icon: <Gem className="w-12 h-12 text-purple-600" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates engaging experiences and drives conversions.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content:
        "Working with this team was a game-changer for our business. They delivered a website that exceeded our expectations in both design and functionality.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder of EcoGreen",
      content:
        "The e-commerce solution they built helped us increase our online sales by 200%. Their attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Dhruv Binal",
      role: "Creative Director",
      content:
        "They transformed our vision into a beautiful, functional website. The whole process was smooth, and the results are amazing.",
      rating: 5,
    },
  ];

  const technologies = [
    {
      id: "wordpress",
      name: "WordPress",
      description: "Custom WordPress websites built for success",
      icon: <Globe className="w-12 h-12 text-white" />,
      bgColor: "bg-[#3757E9]",
      image: wordpress
    },
    {
      id: "shopify",
      name: "Shopify",
      description: "E-commerce solutions that drive sales",
      icon: <Building2 className="w-12 h-12 text-white" />,
      bgColor: "bg-[#95BF47]",
      image: shopify
    },
    {
      id: "code",
      name: "Custom Code",
      description: "Bespoke web applications built from scratch",
      icon: <Code2 className="w-12 h-12 text-white" />,
      bgColor: "bg-slate-400",
      image: co
    },
  ];

  const filteredCards = selectedTechnology
    ? allCards.filter((card) => card.technology === selectedTechnology)
    : [];

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const openModal = (technology) => {
    setSelectedTechnology(technology);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTechnology(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const featuresSection = document.querySelector("#features");
    if (featuresSection) {
      observer.observe(featuresSection);
    }

    return () => {
      if (featuresSection) {
        observer.unobserve(featuresSection);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We build stunning websites that drive results. From custom
              development to e-commerce solutions, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                View Our Work
              </button>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border-2 border-purple-600">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive web development solutions to help your
              business succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Latest Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our work across different technologies and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => openModal(tech.id)}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${tech.bgColor} p-8 text-white h-full`}>
                    <div className="flex items-center justify-between mb-4">
                      {/* {tech.icon} */}
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="h-12 w-auto object-contain" style={{mixBlendMode:'multiply'}}
                      />
                    </div>
                  <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-white/90">{tech.description}</p>
                  <div className="mt-6 text-sm font-medium">
                    Click to view projects →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-7xl max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                {technologies.find((t) => t.id === selectedTechnology)?.name}{" "}
                Projects
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCards.map((card) => (
                  <div
                    key={card.id}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => handleRedirect(card.link)}
                          className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-purple-600 text-sm font-medium">
                        {card.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2">
                        {card.name}
                      </h3>
                      <p className="text-gray-600 mt-1">{card.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bringing Your Digital Vision to Life
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're passionate about creating websites that not only look
                beautiful but also drive real business results. Our team of
                experts combines creativity with technical excellence to deliver
                solutions that stand out.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team working"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 text-lg mb-6">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">{testimonial.role}</div>
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
                    currentTestimonial === index
                      ? "bg-purple-600 w-6"
                      : "bg-purple-200"
                  }`}
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