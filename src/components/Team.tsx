import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, MapPin, Award, Users } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar Sharma",
      position: "Founder & CEO",
      department: "Leadership",
      experience: "20+ Years",
      specialization: "Real Estate Development",
      bio: "Visionary leader with two decades of experience in real estate development and business strategy.",
      achievements: ["Built 50+ residential colonies", "Real Estate Excellence Award 2023", "Business Leader of the Year 2022"],
      contact: {
        email: "rajesh@kolonizer.com",
        phone: "+91 98765 43210",
        linkedin: "#"
      }
    },
    {
      name: "Priya Malhotra",
      position: "Chief Operating Officer",
      department: "Operations",
      experience: "15+ Years",
      specialization: "Project Management",
      bio: "Expert in streamlining operations and ensuring project delivery excellence across all verticals.",
      achievements: ["Delivered 100+ projects on time", "Operations Excellence Award", "Six Sigma Black Belt"],
      contact: {
        email: "priya@kolonizer.com",
        phone: "+91 98765 43211",
        linkedin: "#"
      }
    }
  ];

  const itTeam = [
    {
      name: "Amit Verma",
      position: "CTO & Head of IT",
      department: "Technology",
      experience: "12+ Years",
      specialization: "Full Stack Development",
      bio: "Technology architect specializing in scalable real estate software solutions and digital transformation.",
      skills: ["React", "Node.js", "AWS", "System Architecture"],
      contact: {
        email: "amit@kolonizer.com",
        phone: "+91 98765 43212",
        linkedin: "#"
      }
    },
    {
      name: "Sneha Patel",
      position: "Senior Software Developer",
      department: "Development",
      experience: "8+ Years",
      specialization: "Frontend Development",
      bio: "Expert frontend developer creating intuitive user experiences for real estate applications.",
      skills: ["React", "Vue.js", "TypeScript", "UI/UX Design"],
      contact: {
        email: "sneha@kolonizer.com",
        phone: "+91 98765 43213",
        linkedin: "#"
      }
    },
    {
      name: "Rohit Singh",
      position: "Backend Developer",
      department: "Development",
      experience: "6+ Years",
      specialization: "Backend Systems",
      bio: "Backend specialist building robust APIs and database systems for real estate platforms.",
      skills: ["Python", "Django", "PostgreSQL", "Redis"],
      contact: {
        email: "rohit@kolonizer.com",
        phone: "+91 98765 43214",
        linkedin: "#"
      }
    },
    {
      name: "Kavya Reddy",
      position: "Mobile App Developer",
      department: "Mobile",
      experience: "5+ Years",
      specialization: "Mobile Development",
      bio: "Mobile development expert creating cross-platform applications for real estate businesses.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      contact: {
        email: "kavya@kolonizer.com",
        phone: "+91 98765 43215",
        linkedin: "#"
      }
    },
    {
      name: "Arjun Gupta",
      position: "DevOps Engineer",
      department: "Infrastructure",
      experience: "7+ Years",
      specialization: "Cloud Infrastructure",
      bio: "DevOps specialist ensuring scalable and secure cloud infrastructure for all applications.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      contact: {
        email: "arjun@kolonizer.com",
        phone: "+91 98765 43216",
        linkedin: "#"
      }
    },
    {
      name: "Nisha Jain",
      position: "QA Lead",
      department: "Quality Assurance",
      experience: "6+ Years",
      specialization: "Software Testing",
      bio: "Quality assurance expert ensuring bug-free and high-performance software delivery.",
      skills: ["Automation Testing", "Selenium", "Jest", "Performance Testing"],
      contact: {
        email: "nisha@kolonizer.com",
        phone: "+91 98765 43217",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our diverse team of real estate professionals and technology experts work together to deliver exceptional results and innovative solutions.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Leadership</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="p-8 hover-lift bg-gradient-card border-border">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                      <p className="text-primary font-semibold">{member.position}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline">{member.experience}</Badge>
                        <Badge variant="secondary">{member.specialization}</Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* IT Team Section */}
        <div>
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">IT Development Team</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itTeam.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift bg-background border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-lg font-bold text-primary-foreground mx-auto mb-3">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                    <p className="text-primary text-sm font-semibold">{member.position}</p>
                    <div className="flex justify-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-foreground text-center">Skills:</h5>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 pt-4 border-t border-border">
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 glass p-8 rounded-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence. Explore career opportunities with Kolonizer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg">
              Submit Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;