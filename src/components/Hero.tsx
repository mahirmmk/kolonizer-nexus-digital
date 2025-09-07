import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Real Estate Development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full text-secondary-foreground text-sm font-medium">
                <Trophy className="w-4 h-4 mr-2" />
                Award-Winning Real Estate & IT Solutions
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building 
                <span className="text-gradient-secondary"> Tomorrow's</span>
                <br />
                <span className="text-primary-foreground">Communities</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                Kolonizer Real Business Solutions combines decades of real estate expertise with cutting-edge IT innovation. We create premium residential colonies, commercial spaces, and digital solutions that transform the real estate industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-primary-foreground/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>

            {/* Location Badge */}
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <MapPin className="w-5 h-5" />
              <span>Based in Bhopal, Madhya Pradesh | Serving Pan India</span>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:block space-y-6 animate-slide-in-right">
            <div className="glass p-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Expert Team</h3>
                  <p className="text-muted-foreground text-sm">Real Estate & IT Professionals</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Quality Assured</h3>
                  <p className="text-muted-foreground text-sm">ISO Certified Processes</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover-lift" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Prime Locations</h3>
                  <p className="text-muted-foreground text-sm">Strategic Real Estate Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;