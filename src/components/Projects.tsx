import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Users, TreePine, ArrowRight, Star } from "lucide-react";
import projectImage from "@/assets/project-colony.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Royal Gardens Colony",
      location: "Kolar Road, Bhopal",
      type: "Residential Colony",
      status: "Completed",
      plots: 150,
      area: "25 Acres",
      price: "Starting ₹25 Lakhs",
      features: ["24/7 Security", "Underground Electricity", "Wide Roads", "Garden Park", "Club House"],
      image: projectImage,
      rating: 4.8,
      reviews: 128
    },
    {
      id: 2,
      title: "Platinum Heights",
      location: "Hoshangabad Road, Bhopal",
      type: "Premium Plots",
      status: "Ongoing",
      plots: 200,
      area: "40 Acres",
      price: "Starting ₹35 Lakhs",
      features: ["Gated Community", "Solar Street Lights", "Jogging Track", "Children Play Area", "Amphitheater"],
      image: projectImage,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      title: "Green Valley Estates",
      location: "Bypass Road, Bhopal",
      type: "Eco-Friendly Colony",
      status: "Planning",
      plots: 180,
      area: "35 Acres",
      price: "Starting ₹30 Lakhs",
      features: ["Rainwater Harvesting", "Solar Power", "Organic Gardens", "Cycling Track", "Meditation Center"],
      image: projectImage,
      rating: 4.7,
      reviews: 45
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-success-foreground";
      case "Ongoing": return "bg-secondary text-secondary-foreground";
      case "Planning": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Real Estate Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our premium residential colonies and commercial developments that set new standards in modern living and investment opportunities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/90 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-secondary fill-current" />
                  <span className="text-sm font-semibold">{project.rating}</span>
                  <span className="text-xs text-muted-foreground">({project.reviews})</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-background/90 rounded-lg px-3 py-2">
                  <div className="text-lg font-bold text-primary">{project.price}</div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm font-semibold">{project.plots}</div>
                    <div className="text-xs text-muted-foreground">Plots</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TreePine className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm font-semibold">{project.area}</div>
                    <div className="text-xs text-muted-foreground">Area</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm font-semibold">{project.type}</div>
                    <div className="text-xs text-muted-foreground">Type</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="outline" className="w-full group">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Invest in Your Dream Property?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our complete portfolio of residential and commercial projects. Our expert team will help you find the perfect investment opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;