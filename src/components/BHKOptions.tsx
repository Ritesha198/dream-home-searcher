import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Bed } from "lucide-react";

const BHKOptions = () => {
  const bhkOptions = [
    {
      type: "1 BHK",
      description: "Perfect for singles or couples",
      icon: Home,
      price: "₹25L - ₹60L",
      properties: "2,450+ Properties",
      features: ["1 Bedroom", "1 Bathroom", "Kitchen", "Living Room"]
    },
    {
      type: "2 BHK", 
      description: "Ideal for small families",
      icon: Users,
      price: "₹45L - ₹1.2Cr",
      properties: "3,800+ Properties",
      features: ["2 Bedrooms", "2 Bathrooms", "Kitchen", "Living Room"]
    },
    {
      type: "3 BHK",
      description: "Spacious for growing families",
      icon: Bed,
      price: "₹80L - ₹2.5Cr",
      properties: "2,100+ Properties",
      features: ["3 Bedrooms", "2-3 Bathrooms", "Kitchen", "Living Room", "Balcony"]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose by Configuration
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect home configuration that matches your lifestyle and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bhkOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="group hover:shadow-property transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {option.type}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  
                  <div className="text-primary font-semibold text-lg mb-2">
                    {option.price}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-6">
                    {option.properties}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    View Properties
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BHKOptions;