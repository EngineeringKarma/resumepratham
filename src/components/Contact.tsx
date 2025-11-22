import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-card/20 to-black" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Have a project in mind? Let's discuss how we can collaborate.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-lg border border-muted/30">
            <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">prathameshbhandare2006@gmail.com</p>
          </Card>
          
          <Card className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-lg border border-muted/30">
            <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 7977332096</p>
          </Card>
          
          <Card className="p-6 bg-card hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-lg border border-muted/30">
            <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Panvel, India 410206</p>
          </Card>
        </div>
        
        <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
          <Mail className="w-4 h-4" />
          Send Message
        </Button>
      </div>
    </section>
  );
};
