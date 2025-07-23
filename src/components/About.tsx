import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Star, Lightbulb } from "lucide-react";
import classroomLearning from "@/assets/classroom-learning.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "We create a safe, supportive space where every child feels valued and encouraged to reach their full potential."
    },
    {
      icon: Target,
      title: "Excellence in Education",
      description: "Our rigorous academic programs are designed to challenge students while building strong foundational skills."
    },
    {
      icon: Star,
      title: "Character Development",
      description: "We focus on developing integrity, responsibility, and compassion alongside academic achievement."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "We encourage creative thinking and problem-solving through hands-on learning and modern teaching methods."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About <span className="text-primary">Bright School</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, Bright School has been a beacon of educational excellence, 
                dedicated to nurturing young minds from Kindergarten through Grade 8. Our 
                commitment to holistic education ensures that every student develops not just 
                academically, but also socially, emotionally, and creatively.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide a comprehensive education that empowers students to become 
                  confident, curious, and compassionate individuals ready to make a positive 
                  impact in their communities and the world.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-secondary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading elementary and middle school that inspires a lifelong 
                  love of learning, fostering innovation, and developing the leaders of tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="card-shadow rounded-2xl overflow-hidden">
              <img 
                src={classroomLearning} 
                alt="Students learning in classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent to-yellow-400 rounded-2xl rotate-12 opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-secondary to-green-400 rounded-xl rotate-45 opacity-70"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do at Bright School
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;