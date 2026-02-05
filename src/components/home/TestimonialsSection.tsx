import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    id: 1,
    name: "MARK ALEXANDER",
    role: "Founder of DataFlow",
    quote: "BY MAKING YOUR DIGITAL THERE MARKETING AGENCY WEBSITE LOOK PROFESSIONAL, YOU CAN INCREASE YOUR CREDIBILITY MARKETING AGENCY WEBSITE",
    image: testimonial1,
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    role: "CEO of TechStart",
    quote: "THE TEAM DELIVERED EXCEPTIONAL RESULTS THAT EXCEEDED OUR EXPECTATIONS. THEIR ATTENTION TO DETAIL AND CREATIVE APPROACH MADE ALL THE DIFFERENCE.",
    image: testimonial2,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatedSection className="container-custom py-16 lg:py-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl">
          WHAT VALUABLE
          <br />
          CLIENT
        </h2>
        
        <div className="flex gap-2">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex gap-6 ${index === currentIndex ? 'opacity-100' : 'opacity-60'} transition-opacity`}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-40 rounded-xl overflow-hidden image-zoom">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <Quote className="text-muted-foreground mb-4 rotate-180" size={24} />
              <p className="text-sm leading-relaxed mb-6 uppercase tracking-wide">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-display font-bold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}