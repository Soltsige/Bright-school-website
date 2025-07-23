import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Palette, Calculator, Globe, Music, Beaker } from "lucide-react";

const Academics = () => {
  const gradeGroups = [
    {
      title: "Kindergarten",
      subtitle: "Ages 4-5",
      description: "Foundation building through play-based learning",
      color: "from-accent to-orange-400",
      subjects: ["Early Literacy", "Number Concepts", "Social Skills", "Creative Arts"]
    },
    {
      title: "Primary Years",
      subtitle: "Grades 1-3",
      description: "Core skills development with hands-on exploration",
      color: "from-primary to-primary-glow",
      subjects: ["Language Arts", "Mathematics", "Science", "Social Studies", "Arts"]
    },
    {
      title: "Elementary",
      subtitle: "Grades 4-6",
      description: "Advanced learning with critical thinking focus",
      color: "from-secondary to-green-400",
      subjects: ["Advanced Math", "Research Skills", "STEAM", "Foreign Language"]
    },
    {
      title: "Middle School",
      subtitle: "Grades 7-8",
      description: "Preparation for high school with specialized subjects",
      color: "from-purple-500 to-purple-600",
      subjects: ["Algebra", "Advanced Sciences", "Literature", "Leadership"]
    }
  ];

  const subjects = [
    {
      icon: BookOpen,
      name: "Language Arts",
      description: "Reading, writing, and communication skills"
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "From basic arithmetic to advanced algebra"
    },
    {
      icon: Beaker,
      name: "Science",
      description: "Hands-on experiments and scientific inquiry"
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "History, geography, and cultural awareness"
    },
    {
      icon: Palette,
      name: "Arts",
      description: "Visual arts, music, and creative expression"
    },
    {
      icon: Music,
      name: "Music",
      description: "Instrumental and vocal music programs"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Academic <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum is designed to challenge and inspire students at every level, 
            fostering both academic excellence and personal growth from Kindergarten through Grade 8.
          </p>
        </div>

        {/* Grade Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {gradeGroups.map((group, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${group.color}`}></div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">{group.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{group.subtitle}</p>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {group.subjects.map((subject, subIndex) => (
                    <Badge key={subIndex} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Core Subject Areas</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive education across essential disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-muted/20">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{subject.name}</h4>
                  <p className="text-muted-foreground text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Curriculum Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">STEAM Integration</h4>
              <p className="text-sm text-muted-foreground">Science, Technology, Engineering, Arts, and Mathematics woven throughout our curriculum</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-secondary">Project-Based Learning</h4>
              <p className="text-sm text-muted-foreground">Real-world projects that develop critical thinking and problem-solving skills</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-accent">Individualized Support</h4>
              <p className="text-sm text-muted-foreground">Personalized learning plans to meet each student's unique needs and learning style</p>
            </div>
          </div>
          <div className="mt-8">
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Download Curriculum Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;