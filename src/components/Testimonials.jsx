import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    content: "Working with this digital marketing team transformed our online presence. Our engagement increased by 150% in just three months!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    content: "The ROI we've seen from their strategies has been incredible. They truly understand modern digital marketing.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Founder, EcoStyle",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content: "Their data-driven approach and creative strategies helped us reach our target audience effectively.",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "VP Marketing, GrowthLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    content: "Outstanding service! They delivered results that exceeded our expectations in every way.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Digital Strategist, FutureScale",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    content: "The team's expertise in digital marketing has been invaluable to our company's growth strategy.",
    rating: 5
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  // If we need to wrap around to the beginning
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Discover why businesses trust us with their digital success</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-6 transition-transform duration-1000 ease-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-none w-full md:w-[calc(33.333%-1rem)] transform transition-all duration-500 hover:scale-105"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <Quote className="text-indigo-500 w-8 h-8 mb-2 opacity-50" />
                    <p className="text-gray-700 leading-relaxed mb-4">{testimonial.content}</p>
                  </div>
                  
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;