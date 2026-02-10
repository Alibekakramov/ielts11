import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: '/avatar-sarah.jpg',
    score: 'Band 8.0',
    quote: 'The writing feedback was invaluable! My instructor pointed out exactly where I was losing points and helped me improve my essay structure. I went from band 6.5 to 8.0 in just 6 weeks.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    avatar: '/avatar-ahmed.jpg',
    score: 'Band 8.0',
    quote: 'From band 6.5 to 8.0 in just 2 months! The speaking mock tests with native speakers made all the difference. I felt so confident on test day.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria Garcia',
    avatar: '/avatar-maria.jpg',
    score: 'Band 7.5',
    quote: 'Best investment for my study abroad journey. The practice tests are incredibly realistic, and the detailed explanations helped me understand my mistakes.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: '/avatar-james.jpg',
    score: 'Band 8.5',
    quote: 'The speaking practice tests made all the difference. The instructors are patient, knowledgeable, and truly care about your success. Highly recommend!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-4">
            What our students say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from real students who achieved their IELTS goals
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Testimonial Card */}
          <div className="relative bg-secondary rounded-3xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-black" />
            </div>

            <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
              {/* Avatar & Info */}
              <div className="text-center md:text-left">
                <div className="relative inline-block">
                  <img 
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-primary"
                  />
                  <div className="absolute -bottom-2 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 bg-black text-primary px-3 py-1 rounded-full text-sm font-bold">
                    {testimonials[activeIndex].score}
                  </div>
                </div>
                <h4 className="font-display font-bold text-xl text-black mt-4">
                  {testimonials[activeIndex].name}
                </h4>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-black" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-black" />
            </button>
          </div>
        </div>

        {/* All Avatars */}
        <div 
          className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-300 ${
                index === activeIndex ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-80'
              }`}
            >
              <img 
                src={testimonial.avatar}
                alt={testimonial.name}
                className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 ${
                  index === activeIndex ? 'border-primary' : 'border-transparent'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
