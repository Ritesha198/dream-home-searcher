import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Calendar, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import trendingPlot1 from "@/assets/trending-plot-1.jpg";
import trendingPlot2 from "@/assets/trending-plot-2.jpg";
import trendingPlot3 from "@/assets/trending-plot-3.jpg";

const TrendingPlots = () => {
  const navigate = useNavigate();
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
    },
    {
      id: 4,
      title: "Sunshine Heights",
      location: "Vastrapur, Ahmedabad",
      image: trendingPlot1,
      price: "₹65,00,000",
      area: "1500 sq ft",
      type: "Residential Plot",
      trending: "+12% this month",
      amenities: ["Park View", "School Nearby", "Hospital"]
    },
    {
      id: 5,
      title: "Tech Park Square",
      location: "Prahlad Nagar, Ahmedabad",
      image: trendingPlot2,
      price: "₹95,00,000",
      area: "2200 sq ft",
      type: "Commercial Plot",
      trending: "+25% this month",
      amenities: ["IT Hub", "Metro Station", "Shopping Mall"]
    },
    {
      id: 6,
      title: "Garden View Plots",
      location: "Thaltej, Ahmedabad",
      image: trendingPlot3,
      price: "₹75,00,000",
      area: "1800 sq ft",
      type: "Villa Plot",
      trending: "+20% this month",
      amenities: ["Lake View", "Golf Course", "Clubhouse"]
    },
    {
      id: 7,
      title: "Heritage Square",
      location: "Navrangpura, Ahmedabad",
      image: trendingPlot1,
      price: "₹55,00,000",
      area: "1100 sq ft",
      type: "Residential Plot",
      trending: "+8% this month",
      amenities: ["Historic Area", "Cultural Center", "Library"]
    },
    {
      id: 8,
      title: "Modern Living",
      location: "Gota, Ahmedabad",
      image: trendingPlot2,
      price: "₹40,00,000",
      area: "1000 sq ft",
      type: "Residential Plot",
      trending: "+10% this month",
      amenities: ["New Development", "Wide Roads", "Power Backup"]
    },
    {
      id: 9,
      title: "Elite Towers",
      location: "Satellite, Ahmedabad",
      image: trendingPlot3,
      price: "₹1,50,00,000",
      area: "3500 sq ft",
      type: "Commercial Plot",
      trending: "+30% this month",
      amenities: ["Premium Location", "High Street", "Corporate Hub"]
    },
    {
      id: 10,
      title: "Family Paradise",
      location: "Maninagar, Ahmedabad",
      image: trendingPlot1,
      price: "₹35,00,000",
      area: "900 sq ft",
      type: "Residential Plot",
      trending: "+6% this month",
      amenities: ["Family Friendly", "Schools", "Markets"]
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

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
              {trendingPlots.slice(0, 5).map((plot) => (
                <CarouselItem key={plot.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <Card className="group overflow-hidden hover:shadow-property transition-all duration-300 cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={plot.image} 
                        alt={plot.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          {plot.type}
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-xs">
                          <TrendingUp className="h-2 w-2 mr-1" />
                          {plot.trending}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {plot.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="text-xs line-clamp-1">{plot.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-primary font-semibold text-sm">
                          <IndianRupee className="h-3 w-3" />
                          <span>{plot.price}</span>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {plot.area}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1">
                          {plot.amenities.slice(0, 2).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-xs"
                          onClick={() => navigate(`/property/${plot.id}`)}
                        >
                          Details
                        </Button>
                        <Button size="sm" className="flex-1 text-xs">
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {trendingPlots.slice(5, 10).map((plot) => (
                <CarouselItem key={plot.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <Card className="group overflow-hidden hover:shadow-property transition-all duration-300 cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={plot.image} 
                        alt={plot.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          {plot.type}
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-xs">
                          <TrendingUp className="h-2 w-2 mr-1" />
                          {plot.trending}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {plot.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="text-xs line-clamp-1">{plot.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-primary font-semibold text-sm">
                          <IndianRupee className="h-3 w-3" />
                          <span>{plot.price}</span>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {plot.area}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1">
                          {plot.amenities.slice(0, 2).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 text-xs"
                          onClick={() => navigate(`/property/${plot.id}`)}
                        >
                          Details
                        </Button>
                        <Button size="sm" className="flex-1 text-xs">
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </div>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

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