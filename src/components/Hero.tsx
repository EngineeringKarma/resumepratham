import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
      
      <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1 shadow-netflix">
            <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center text-5xl font-bold text-primary border-2 border-primary/30">
              YN
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-foreground">
            Your Name
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground font-light">
          Full Stack Developer & Designer
        </p>
        
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Passionate about creating elegant solutions to complex problems. 
          Specializing in modern web technologies and user-centric design.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-transform">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-8">
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted/30 hover:scale-110 transition-all">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-muted/30 hover:scale-110 transition-all">
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
