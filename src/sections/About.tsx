import { useEffect, useRef, useState } from 'react';
import { Check, GraduationCap, FileText, MessageSquare, Mic } from 'lucide-react';

const features = [
  { icon: GraduationCap, text: 'Expert instructors with 10+ years experience' },
  { icon: FileText, text: 'Full-length practice tests with detailed feedback' },
  { icon: MessageSquare, text: 'Personalized writing feedback within 24 hours' },
  { icon: Mic, text: 'Live speaking mock tests with native speakers' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-primary/20 rounded-3xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-image.jpg" 
                  alt="Students studying together" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-black text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="font-display font-bold text-4xl text-primary">10+</div>
                  <div className="text-white/70 text-sm mt-1">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="space-y-4">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
                Why choose our IELTS preparation?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our platform offers comprehensive study materials designed by IELTS experts. 
                From practice tests to writing feedback, we provide everything you need to succeed 
                in your IELTS journey and achieve your dream score.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div 
              className={`pt-4 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button className="btn-primary">
                Explore Our Method
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
