import { useEffect, useRef, useState } from 'react';
import { Clock, Users, Star, ArrowRight, BookOpen, PenTool, MessageCircle, Headphones } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Academic IELTS',
    description: 'Complete preparation for university admissions. Master all four modules with expert guidance.',
    image: '/course-academic.jpg',
    icon: BookOpen,
    duration: '8 weeks',
    students: '4,500+',
    rating: 4.9,
    price: '$89',
    features: ['All 4 modules covered', '20+ practice tests', 'Writing feedback'],
  },
  {
    id: 2,
    title: 'General Training',
    description: 'For immigration and work opportunities. Focus on practical English skills.',
    image: '/course-general.jpg',
    icon: Headphones,
    duration: '6 weeks',
    students: '3,200+',
    rating: 4.8,
    price: '$79',
    features: ['Workplace English', 'Letter writing', 'Speaking practice'],
  },
  {
    id: 3,
    title: 'Writing Masterclass',
    description: 'Boost your writing band score with personalized feedback and proven strategies.',
    image: '/course-writing.jpg',
    icon: PenTool,
    duration: '4 weeks',
    students: '2,800+',
    rating: 4.9,
    price: '$69',
    features: ['Task 1 & 2 mastery', 'Daily feedback', 'Band 7+ strategies'],
  },
  {
    id: 4,
    title: 'Speaking Confidence',
    description: 'Perfect your pronunciation and fluency with native speaker mock tests.',
    image: '/course-speaking.jpg',
    icon: MessageCircle,
    duration: '4 weeks',
    students: '1,500+',
    rating: 4.7,
    price: '$59',
    features: ['Live mock tests', 'Pronunciation tips', 'Fluency drills'],
  },
];

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="courses"
      ref={sectionRef}
      className="section-padding bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full" />
      
      <div className="container-custom relative">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Courses
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-4">
            Our IELTS Courses
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect course for your learning style and target band score
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredCard === course.id ? 'transform -translate-y-2 shadow-2xl' : ''}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === course.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <course.icon className="w-5 h-5 text-black" />
                </div>

                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                  <span className="font-display font-bold text-black">{course.price}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-xl text-black mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  hoveredCard === course.id 
                    ? 'bg-primary text-black' 
                    : 'bg-black text-white'
                }`}>
                  Enroll Now
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredCard === course.id ? 'translate-x-1' : ''
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="inline-flex items-center gap-2 text-black font-semibold hover:text-primary transition-colors">
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
