import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Artificial Intelligence Model Trainer",
    company: "ATLAS Skilltech University",
    period: "08/2024 - 08/2028",
    description: "Creating graphs and charts detailing data analysis results. Cleaning and manipulating raw data. Applying feature selection algorithms to predict potential outcomes. Contributing innovative ideas and solutions to enhance team performance.",
    technologies: ["Python", "SQL", "Machine Learning", "Data Analysis", "Probability Statistics"]
  }
];

const education = [
  {
    degree: "B.Tech in CS: AIML (Artificial Intelligence and Machine Learning)",
    institution: "ATLAS Skilltech University",
    location: "Kurla, India",
    period: "08/2024 - 08/2028"
  }
];

const achievements = [
  {
    title: "AIRO-BOT Development",
    description: "Developed AIRO-BOT, a robot-car prototype capable of object detection and avoidance, controllable remotely or via a person's phone movement (Steering Linearity Definition). Worked on software development, motion control, and object detection mechanisms."
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

        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-6">Education</h3>
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <div>
                  <h4 className="text-2xl font-bold mb-1">{edu.degree}</h4>
                  <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
                <Badge variant="secondary" className="w-fit bg-secondary/80 text-secondary-foreground border border-muted">
                  {edu.period}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-6">Key Achievements</h3>
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary shadow-lg"
            >
              <h4 className="text-2xl font-bold mb-3">{achievement.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
