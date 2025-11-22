import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { IntroAnimation } from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className="min-h-screen bg-black">
        <Navigation />
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      
        <footer className="py-8 px-4 border-t border-muted/30 bg-black">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>© 2024 Prathamesh Bhandare. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
