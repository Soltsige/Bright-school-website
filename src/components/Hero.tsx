import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import schoolHero from "@/assets/school-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${schoolHero})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                Bright School
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Nurturing young minds from Kindergarten to Grade 8 with excellence, 
              creativity, and care in a warm learning environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Schedule a Visit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 animate-slide-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm opacity-80">Happy Students</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm opacity-80">Expert Teachers</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm opacity-80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm">Scroll to explore</p>
          <div className="w-1 h-8 bg-white/30 rounded-full">
            <div className="w-1 h-4 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;