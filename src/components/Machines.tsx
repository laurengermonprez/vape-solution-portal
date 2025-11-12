import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import wallMountMachine from "@/assets/wall-mount-machine.webp";
import standingMachine from "@/assets/standing-machine.jpeg";

const Machines = () => {
  const machines = [
    {
      title: "Wall-Mount Machine",
      image: wallMountMachine,
      dimensions: "H: 40.5\" | W: 23.6\" | D: 10.2\"",
      description: "Compact and space-saving design perfect for smaller venues or areas with limited floor space. Features a secure, easy-to-access interface with digital payment options.",
      features: [
        "Space-efficient wall mounting",
        "Sleek modern design",
        "Secure product dispensing",
        "Perfect for bars, lounges, and retail"
      ]
    },
    {
      title: "Tower Machine",
      image: standingMachine,
      dimensions: "H: 71.1\" | W: 27.5\" | D: 13.7\"",
      description: "Standing tall and robust, offering larger product capacity ideal for high-traffic locations. Eye-catching design with customizable branding options.",
      features: [
        "High-capacity storage",
        "RGB LED lighting",
        "Touchscreen interface",
        "Ideal for high-traffic venues"
      ]
    }
  ];

  return (
    <section id="machines" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Vape Vend <span className="text-primary">Machines</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sleek, modern vending machines designed to fit seamlessly into various settings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {machines.map((machine, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-96 bg-primary/5 overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{machine.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {machine.dimensions}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {machine.description}
                </p>
                <ul className="space-y-2">
                  {machine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Advanced Technology</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Both models are equipped with cutting-edge technology, including <strong>age verification</strong>, 
                <strong> contactless payment options</strong>, and <strong>remote monitoring</strong> to ensure 
                consistent stock and maintenance. Experience the future of automated retail.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Machines;
