import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API with customizable templates and export options.",
    technologies: ["React", "Python", "OpenAI", "AWS"],
    color: "from-green-600 to-emerald-600"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-black" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-sm bg-accent/10 border border-accent/20">
            <Rocket className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group bg-card border border-muted/30 shadow-lg"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-secondary/80 border border-muted/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2 flex-1 hover:scale-105 transition-transform">
                    <Github className="w-3 h-3" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1 hover:scale-105 transition-transform">
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
