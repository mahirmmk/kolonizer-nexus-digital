import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Database, Cloud, Zap, ArrowRight, CheckCircle } from "lucide-react";
import itServicesImage from "@/assets/it-services.jpg";

const ITServices = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions for real estate businesses including CRM, ERP, and property management systems.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL"],
      features: [
        "Real Estate CRM Systems",
        "Property Management Platforms",
        "Lead Generation Tools",
        "Automated Workflows"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that enhance customer experience and streamline operations.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: [
        "Property Booking Apps",
        "Virtual Tour Applications",
        "Client Portal Apps",
        "Real-time Notifications"
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that showcase properties and drive conversions.",
      technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
      features: [
        "Property Listing Websites",
        "Interactive Maps",
        "Virtual Property Tours",
        "SEO Optimization"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Advanced analytics solutions to help real estate businesses make data-driven decisions.",
      technologies: ["Power BI", "Tableau", "Python", "SQL"],
      features: [
        "Sales Performance Analytics",
        "Market Trend Analysis",
        "Customer Behavior Insights",
        "ROI Tracking"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for enhanced performance and security.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      features: [
        "Cloud Migration",
        "Auto-scaling Solutions",
        "Data Backup & Recovery",
        "24/7 Monitoring"
      ]
    },
    {
      icon: Zap,
      title: "Digital Marketing Solutions",
      description: "Comprehensive digital marketing tools and strategies to boost online presence and lead generation.",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
      features: [
        "Lead Generation Campaigns",
        "Social Media Marketing",
        "Email Marketing Automation",
        "Conversion Optimization"
      ]
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes",
    "React Native", "Flutter", "Next.js", "Express.js", "GraphQL", "Redis", "ElasticSearch"
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            IT Solutions for <span className="text-gradient">Real Estate</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Leverage our specialized IT expertise to transform your real estate business with cutting-edge technology solutions designed specifically for the property industry.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Technology That Powers Real Estate Success
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our IT division specializes in creating technology solutions that address the unique challenges of the real estate industry. From property management systems to customer engagement platforms, we deliver solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">IT Projects Delivered</div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy IT Clients</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Why Choose Our IT Services?</h4>
              <div className="space-y-3">
                {[
                  "Real Estate Domain Expertise",
                  "Agile Development Methodology",
                  "24/7 Technical Support",
                  "Scalable Architecture",
                  "Data Security & Compliance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <img
              src={itServicesImage}
              alt="IT Development Team"
              className="w-full h-[400px] object-cover rounded-2xl shadow-premium"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift bg-background border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="glass p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Real Estate Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our specialized IT solutions can streamline your operations, enhance customer experience, and drive growth for your real estate business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get IT Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITServices;