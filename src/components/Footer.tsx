import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bright School</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nurturing young minds from Kindergarten to Grade 8 with excellence, 
              creativity, and care for over 15 years.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="w-4 h-4 text-accent" />
              <span>Inspiring Tomorrow's Leaders</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-primary-foreground/80 hover:text-accent transition-colors">Academics</a></li>
              <li><a href="#facilities" className="text-primary-foreground/80 hover:text-accent transition-colors">Facilities</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary-foreground/80">Kindergarten (Ages 4-5)</span></li>
              <li><span className="text-primary-foreground/80">Primary Years (Grades 1-3)</span></li>
              <li><span className="text-primary-foreground/80">Elementary (Grades 4-6)</span></li>
              <li><span className="text-primary-foreground/80">Middle School (Grades 7-8)</span></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Summer Programs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">123 Education Street<br />Bright City, BC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">(555) 123-BRIGHT</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@brightschool.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/60">
            © 2024 Bright School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;