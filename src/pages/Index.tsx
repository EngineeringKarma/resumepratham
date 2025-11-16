import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-muted/30 bg-black">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
