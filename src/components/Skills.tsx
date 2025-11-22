import { Card } from "@/components/ui/card";
import { Code, Palette, Database, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Technical Skills",
    skills: ["Python", "SQL", "Machine Learning", "Artificial Intelligence", "Algorithm", "Java", "Unreal Engine", "Probability Statistics", "Data Programming"]
  },
  {
    icon: Database,
    title: "Data & Analysis",
    skills: ["SQL Database Coding", "Data Manipulation", "Feature Selection", "Predictive Analytics", "Stocks and Market"]
  },
  {
    icon: Palette,
    title: "Creative and Design Skills",
    skills: ["Basic Photography & Videography", "Trend Research & Adaptation", "Basic Brand Consistency", "Identifying Top-Performing Content & Patterns", "Canva"]
  },
  {
    icon: Code,
    title: "Strengths",
    skills: ["Adaptability", "Flexibility", "Problem Solving", "Team Collaboration", "Innovation"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-card/30 to-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 shadow-lg border border-muted/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-sm bg-primary shadow-netflix">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary/80 text-secondary-foreground rounded-sm text-sm font-semibold border border-muted/30 hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
