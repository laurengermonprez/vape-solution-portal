import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import teamMember from "@/assets/team-member.jpeg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to revolutionize your retail space? Contact us today to learn more about our vending solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            <Card className="border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a 
                      href="tel:752-282-1546" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      752-282-1546
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:cpcprofessionals@yahoo.com" 
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      cpcprofessionals@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Fort Lauderdale, Florida
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold">Ideal For:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Bars, Pubs & Breweries
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Retail Spaces & Convenience Stores
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Entertainment Venues & Casinos
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    Hotels & Resorts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="relative h-[500px]">
                <img
                  src={teamMember}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Support Team</h3>
                  <p className="text-white/90 mb-4">
                    Our dedicated team is here to help you every step of the way, from installation to ongoing support.
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary-dark"
                    onClick={() => window.location.href = 'tel:752-282-1546'}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
