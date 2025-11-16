import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"]
  },
  {
    role: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"]
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Created responsive web applications and landing pages. Collaborated with designers to implement pixel-perfect UIs.",
    technologies: ["JavaScript", "React", "CSS", "Figma"]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-black" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-sm bg-primary/10 border border-primary/20">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="w-fit bg-secondary/80 text-secondary-foreground border border-muted">
                  {exp.period}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs border-muted bg-muted/20 hover:bg-muted/40 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
