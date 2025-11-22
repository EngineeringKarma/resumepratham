import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
      
      <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1 shadow-netflix">
            <img 
              src={profilePhoto} 
              alt="Prathamesh Bhandare" 
              className="w-full h-full rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-foreground">
            Prathamesh Bhandare
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground font-light">
          Artificial Intelligence Model Trainer
        </p>
        
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Seasoned Artificial Intelligence Model Trainer specializing in transforming raw data into predictive insights. 
          Skilled in Probability Statistics and SQL Database Coding, with a strong foundation in Python and knowledge in stock markets and financial operations.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" className="gap-2 hover:scale-105 transition-transform" asChild>
            <a href="mailto:prathameshbhandare2006@gmail.com">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-transform">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-8">
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted/30 hover:scale-110 transition-all" asChild>
            <a href="https://www.linkedin.com/in/prathamesh-bhandare" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted/30 hover:scale-110 transition-all" asChild>
            <a href="https://github.com/prathameshbhandare" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
