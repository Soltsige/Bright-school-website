import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Beaker, Gamepad2, Computer, Music, Utensils } from "lucide-react";
import libraryImage from "@/assets/library.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces",
      image: libraryImage,
      highlights: ["10,000+ books", "Digital learning resources", "Reading corner for younger students"]
    },
    {
      icon: Beaker,
      title: "Science Laboratories",
      description: "Fully equipped labs for hands-on scientific exploration and experiments",
      image: scienceLabImage,
      highlights: ["Safety-first equipment", "Age-appropriate experiments", "STEAM integration"]
    },
    {
      icon: Computer,
      title: "Computer Lab",
      description: "State-of-the-art technology center for digital literacy and coding",
      image: null,
      highlights: ["30 modern computers", "Coding programs", "Digital citizenship training"]
    },
    {
      icon: Music,
      title: "Music Room",
      description: "Dedicated space for musical education with instruments and recording equipment",
      image: null,
      highlights: ["Piano and keyboards", "Band instruments", "Recording studio"]
    },
    {
      icon: Gamepad2,
      title: "Sports Complex",
      description: "Indoor and outdoor facilities for physical education and sports activities",
      image: null,
      highlights: ["Basketball court", "Soccer field", "Playground equipment"]
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Nutritious meals prepared fresh daily in our modern kitchen facility",
      image: null,
      highlights: ["Healthy meal options", "Allergy-conscious menu", "Comfortable dining area"]
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our campus provides a safe, modern, and inspiring environment where students can learn, 
            grow, and thrive. Every facility is designed with student success and safety in mind.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Image or Icon Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                {facility.image ? (
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <facility.icon className="w-10 h-10 text-white" />
                  </div>
                )}
                {facility.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                )}
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{facility.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {facility.highlights.map((highlight, hlIndex) => (
                      <li key={hlIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Additional Campus Features</h3>
            <p className="text-muted-foreground">Everything your child needs for a complete educational experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-orange-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚌</span>
              </div>
              <h4 className="font-semibold text-foreground">Transportation</h4>
              <p className="text-sm text-muted-foreground">Safe school bus service</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-green-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-semibold text-foreground">Health Center</h4>
              <p className="text-sm text-muted-foreground">On-site nurse and medical care</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-foreground">Security</h4>
              <p className="text-sm text-muted-foreground">24/7 campus security</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold text-foreground">Garden</h4>
              <p className="text-sm text-muted-foreground">Learning garden for ecology studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;