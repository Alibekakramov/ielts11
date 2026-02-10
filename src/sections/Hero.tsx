import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Play, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users, value: "12,000+", label: "Students" },
  { icon: Play, value: "500+", label: "Video Lessons" },
  { icon: Award, value: "98%", label: "Success Rate" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-hero overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-gradient-noise pointer-events-none" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 container-custom py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
            <span className="text-white font-display font-bold text-xl">
              IELTS Mastery by alibek
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#courses"
              className="text-white/80 hover:text-white transition-colors"
            >
              Courses
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </div>

          <Button className="btn-primary hidden sm:flex">Get Started</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container-custom pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-white/90 text-sm">
                  Trusted by 12,000+ students worldwide
                </span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                Master IELTS with{" "}
                <span className="text-primary">confidence by alibek</span>
              </h1>

              <p className="text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed">
                Comprehensive preparation resources, expert strategies, and
                practice materials to help you achieve your target band score.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button className="btn-primary flex items-center gap-2 text-base">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button className="btn-secondary flex items-center gap-2 text-base">
                <Play className="w-5 h-5" />
                View Courses
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 pt-8 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-xl">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl transform scale-90" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="/hero-image.jpg"
                  alt="Student studying"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg">
                      Band 8.0+
                    </div>
                    <div className="text-gray-500 text-sm">Average Score</div>
                  </div>
                </div>
              </div>

              {/* Floating students */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex -space-x-2">
                  <img
                    src="/avatar-sarah.jpg"
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/avatar-ahmed.jpg"
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/avatar-maria.jpg"
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs font-bold">
                    +9k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
