import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative max-w-6xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-5xl font-bold text-primary">
              YN
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
          <Button size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-8">
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10">
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
