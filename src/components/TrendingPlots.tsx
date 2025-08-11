import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Calendar, IndianRupee } from "lucide-react";
import trendingPlot1 from "@/assets/trending-plot-1.jpg";
import trendingPlot2 from "@/assets/trending-plot-2.jpg";
import trendingPlot3 from "@/assets/trending-plot-3.jpg";

const TrendingPlots = () => {
  const trendingPlots = [
    {
      id: 1,
      title: "Green Valley Residency",
      location: "Sarkhej, Ahmedabad",
      image: trendingPlot1,
      price: "₹45,00,000",
      area: "1200 sq ft",
      type: "Residential Plot",
      trending: "+15% this month",
      amenities: ["Gated Community", "24/7 Security", "Garden"]
    },
    {
      id: 2,
      title: "Royal Enclave",
      location: "Bopal, Ahmedabad", 
      image: trendingPlot2,
      price: "₹85,00,000",
      area: "2000 sq ft",
      type: "Villa Plot",
      trending: "+22% this month",
      amenities: ["Club House", "Swimming Pool", "Playground"]
    },
    {
      id: 3,
      title: "Business Hub Plaza",
      location: "SG Highway, Ahmedabad",
      image: trendingPlot3,
      price: "₹1,25,00,000",
      area: "3000 sq ft",
      type: "Commercial Plot",
      trending: "+18% this month",
      amenities: ["Prime Location", "Metro Connectivity", "Food Court"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trending Plots
            </h2>
            <p className="text-muted-foreground text-lg">
              Most popular and fast-selling plots in prime locations
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Plots
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPlots.map((plot) => (
            <Card key={plot.id} className="group overflow-hidden hover:shadow-property transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={plot.image} 
                  alt={plot.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {plot.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {plot.trending}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {plot.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{plot.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary font-semibold text-lg">
                    <IndianRupee className="h-4 w-4" />
                    <span>{plot.price}</span>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {plot.area}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex flex-wrap gap-1">
                    {plot.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Contact Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            View All Plots
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingPlots;