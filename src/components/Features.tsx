import { Shield, Smartphone, BarChart3, Zap, Lock, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Age Verification",
      description: "Built-in ID scanning technology ensures compliance and responsible sales"
    },
    {
      icon: Smartphone,
      title: "Contactless Payments",
      description: "Accept all major credit cards, mobile payments, and digital wallets"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor sales, inventory levels, and customer preferences remotely"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Professional installation and training included with every machine"
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Secure technology with tamper-proof design ensures customer satisfaction and peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Always available with minimal maintenance required"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="text-primary">Vape Vendor Solutions</span>
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Cutting-edge technology designed for seamless operation and maximum profitability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/10 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
