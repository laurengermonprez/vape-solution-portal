import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Package, ClipboardCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Installation",
      description: "We handle the complete installation process from start to finish. Our professional team manages all technical setup, electrical connections, and machine placement to ensure optimal performance. We work with your schedule to minimize disruption to your business operations.",
      features: [
        "Professional on-site installation",
        "Electrical and technical setup included",
        "Strategic placement consultation",
        "Complete training for your staff",
        "Zero hassle for your business"
      ]
    },
    {
      icon: Package,
      title: "Restocking",
      description: "Our team maintains optimal inventory levels so your machine is always fully stocked with the latest and most popular products. We monitor stock levels remotely and schedule regular restocking visits based on your location's demand patterns.",
      features: [
        "Regular scheduled restocking visits",
        "Premium product selection",
        "Real-time inventory monitoring",
        "Demand-based product rotation",
        "No inventory management required from you"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Maintenance",
      description: "We provide comprehensive maintenance services to keep your machine running smoothly 24/7. Our proactive approach includes regular inspections, software updates, and immediate response to any technical issues to ensure maximum uptime and customer satisfaction.",
      features: [
        "24/7 remote monitoring and support",
        "Regular preventive maintenance",
        "Rapid response to technical issues",
        "Software updates and security patches",
        "Parts replacement at no additional cost"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            We Handle <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Everything</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From installation to daily operations, we do all the heavy lifting so you can focus on your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Complete Turnkey Solution</h3>
              <p className="text-lg text-muted-foreground">
                You provide the space, we handle everything else. No upfront costs for inventory, 
                no maintenance headaches, and no operational burden. Start generating passive income 
                with zero effort on your part.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;