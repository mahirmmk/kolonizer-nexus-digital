import { Button } from "@/components/ui/button";
import { Building2, Code, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import teamImage from "@/assets/team-office.jpg";

const About = () => {
  const achievements = [
    "15+ Years of Real Estate Excellence",
    "50+ Successful Colony Developments",
    "Custom IT Solutions for Real Estate",
    "1000+ Satisfied Property Investors",
    "ISO 9001:2015 Certified Processes"
  ];

  const services = [
    {
      icon: Building2,
      title: "Real Estate Development",
      description: "Premium residential colonies, commercial complexes, and strategic land development projects across Madhya Pradesh.",
      features: ["Residential Colonies", "Plot Development", "Commercial Spaces", "Infrastructure Planning"]
    },
    {
      icon: Code,
      title: "IT Solutions",
      description: "Specialized software development for real estate businesses, from CRM systems to property management platforms.",
      features: ["Real Estate CRM", "Property Management Apps", "Web Development", "Digital Marketing Solutions"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Kolonizer</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Where real estate expertise meets technological innovation. We're not just building properties – we're crafting digital solutions that revolutionize how real estate businesses operate.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Dual Expertise in Real Estate & Technology
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Bhopal, Madhya Pradesh, Kolonizer Real Business Solutions uniquely combines traditional real estate development with modern IT innovation. Our dual expertise allows us to not only create exceptional residential and commercial properties but also develop the technology solutions that power the real estate industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From premium residential colonies to comprehensive IT systems, we deliver end-to-end solutions that exceed expectations and set new industry standards.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img
                src={teamImage}
                alt="Kolonizer Team at Work"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;