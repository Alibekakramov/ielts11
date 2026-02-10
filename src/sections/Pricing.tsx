import { useEffect, useRef, useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const plans = [
  {
    id: 1,
    name: 'Basic',
    description: 'Perfect for self-starters',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      { text: 'Access to 50+ practice tests', included: true },
      { text: 'Video lesson library', included: true },
      { text: 'Basic study materials', included: true },
      { text: 'Community forum access', included: true },
      { text: 'Writing feedback', included: false },
      { text: '1-on-1 tutoring', included: false },
      { text: 'Speaking mock tests', included: false },
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Pro',
    description: 'Most popular choice',
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: [
      { text: 'Access to all practice tests', included: true },
      { text: 'Full video course library', included: true },
      { text: 'Premium study materials', included: true },
      { text: 'Priority community support', included: true },
      { text: 'Weekly writing feedback', included: true },
      { text: '1-on-1 tutoring', included: false },
      { text: 'Speaking mock tests', included: true },
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Premium',
    description: 'For serious achievers',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited writing feedback', included: true },
      { text: '4x 1-on-1 tutoring sessions', included: true },
      { text: 'Weekly speaking mock tests', included: true },
      { text: 'Personal study plan', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Band score guarantee', included: true },
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
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
      id="pricing"
      ref={sectionRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Choose your plan
          </h2>
          <p className="text-white/60 text-lg">
            Flexible pricing options to fit your learning goals
          </p>
        </div>

        {/* Toggle */}
        <div 
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-white/50'}`}>
            Monthly
          </span>
          <Switch 
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-white/50'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="bg-primary text-black text-xs font-bold px-2 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                plan.popular 
                  ? 'bg-primary text-black scale-105 shadow-glow-lg' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-primary px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-2xl mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-black/70' : 'text-white/60'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display font-bold text-4xl lg:text-5xl">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-black/70' : 'text-white/60'}`}>
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-black/60' : 'text-white/50'}`}>
                    ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-black/20' : 'bg-primary/20'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-black' : 'text-primary'}`} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                        <X className="w-3 h-3 text-white/40" />
                      </div>
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? (plan.popular ? 'text-black' : 'text-white') 
                        : 'text-white/40'
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                plan.popular
                  ? 'bg-black text-white hover:bg-black/80'
                  : 'bg-white text-black hover:bg-primary'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white/50 text-sm">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
