import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Building,
  Car,
  TreePine,
  Shield,
  Wifi,
  Phone,
  Mail,
  Share2
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trendingPlot1 from "@/assets/trending-plot-1.jpg";
import trendingPlot2 from "@/assets/trending-plot-2.jpg";
import trendingPlot3 from "@/assets/trending-plot-3.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  // Sample property data - in real app, fetch from API using id
  const property = {
    id: id || "1",
    title: "Venus Pashmina",
    location: "Bodakdev, Ahmedabad",
    developer: "Venus Group",
    price: "Price on Request",
    images: [trendingPlot1, trendingPlot2, trendingPlot3, trendingPlot1, trendingPlot2],
    bhkOptions: [
      { type: "4 BHK Flat", area: "5265 - 5472 Sq-ft", builtUpArea: "Super BuiltUp Area" },
      { type: "5 BHK Flat", area: "6876 - 7740 Sq-ft", builtUpArea: "Super BuiltUp Area" },
      { type: "6 BHK Penthouse", area: "9856 Sq-ft", builtUpArea: "Super BuiltUp Area" }
    ],
    reraId: "RERA-Id: PR/OP/AHMEDABAD/CITSRVPVL/02050521",
    amenities: [
      "Swimming Pool", "Gymnasium", "Club House", "Children's Play Area",
      "24/7 Security", "Power Backup", "Lift", "Parking", "Garden", "CCTV"
    ],
    overview: {
      propertyType: "Flat, Penthouse",
      newBooking: "Ready to Move",
      totalArea: "9000 Sq-yrd",
      possessionDate: "March 2026",
      residenceType: "Exclusive Residences",
      projectStage: "Ready to Move",
      totalUnits: "126",
      launchDate: "December 2020"
    },
    floorPlans: [
      { 
        type: "4 BHK", 
        area: "5265 Sq-ft", 
        builtUpArea: "Super BuiltUp Area",
        bedrooms: 4,
        bathrooms: 4,
        balconies: 3
      },
      { 
        type: "5 BHK", 
        area: "5472 Sq-ft", 
        builtUpArea: "Super BuiltUp Area",
        bedrooms: 5,
        bathrooms: 4,
        balconies: 3
      }
    ]
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % property.images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [property.images.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Listings
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${property.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                          {index + 1} / {property.images.length}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developed By: {property.developer}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{property.price}</p>
                    <Button className="mt-2">Brochure</Button>
                  </div>
                </div>
              </div>

              {/* BHK Options */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Available Configurations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {property.bhkOptions.map((option, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
                        <h4 className="font-semibold text-lg mb-2">{option.type}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{option.area}</p>
                        <p className="text-xs text-muted-foreground">{option.builtUpArea}</p>
                        <p className="text-lg font-bold text-primary mt-2">{property.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floor Plans */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {property.floorPlans.map((plan, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                          <p className="text-muted-foreground">Floor Plan {plan.type}</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">{plan.type}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Bed className="h-4 w-4" />
                              {plan.bedrooms}
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath className="h-4 w-4" />
                              {plan.bathrooms}
                            </div>
                            <div className="flex items-center gap-1">
                              <Square className="h-4 w-4" />
                              {plan.balconies}
                            </div>
                          </div>
                          <p className="text-sm font-medium">{plan.area} - {plan.builtUpArea}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Enquire Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Overview */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Property Type</p>
                      <p className="font-medium">{property.overview.propertyType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">New Booking</p>
                      <p className="font-medium">{property.overview.newBooking}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Area</p>
                      <p className="font-medium">{property.overview.totalArea}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Possession Date</p>
                      <p className="font-medium">{property.overview.possessionDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Residence Type</p>
                      <p className="font-medium">{property.overview.residenceType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project Stage</p>
                      <p className="font-medium">{property.overview.projectStage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Units</p>
                      <p className="font-medium">{property.overview.totalUnits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Launch Date</p>
                      <p className="font-medium">{property.overview.launchDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border rounded">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["All", "Construction", "Amenities", "Elevation", "Neighbourhood", "Others", "Sample"].map((tab) => (
                      <Button 
                        key={tab} 
                        variant={tab === "All" ? "default" : "outline"} 
                        size="sm"
                        className="text-xs"
                      >
                        {tab}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {property.images.concat(property.images).map((image, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button variant="outline">Show More</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Video */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Video</h3>
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Property Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Project Location */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Location</h3>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <p className="font-medium">29°0'208.7"N 72°30'28...</p>
                      <p className="text-muted-foreground">
                        2245+333 Ahmedabad, Gujarat
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary text-sm">
                        View larger map
                      </Button>
                    </div>
                    <div 
                      className="relative h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => window.open(`https://maps.google.com/?q=${property.location}`, '_blank')}
                    >
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(property.location)}`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ filter: 'grayscale(0.2)' }}
                      />
                      <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium">
                          Click to open in Google Maps
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What's Nearby */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What's Nearby</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Schools & Education
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Delhi Public School - 2.5 km</li>
                        <li>• IIIT Ahmedabad - 5 km</li>
                        <li>• Gujarat University - 8 km</li>
                        <li>• Kendriya Vidyalaya - 3 km</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Car className="h-4 w-4" />
                        Transportation
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bopal Metro Station - 4 km</li>
                        <li>• Ahmedabad Airport - 15 km</li>
                        <li>• Bus Stop - 1 km</li>
                        <li>• Railway Station - 12 km</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TreePine className="h-4 w-4" />
                        Entertainment & Shopping
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Palladium Mall - 6 km</li>
                        <li>• Acropolis Mall - 8 km</li>
                        <li>• Karnavati Club - 7 km</li>
                        <li>• Himalaya Mall - 5 km</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Interested to buy Property in <br />
                  <span className="text-primary">BODAKDEV?</span>
                </h3>
                
                <div className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Mobile number" type="tel" />
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-xs text-muted-foreground">
                      I agree to be contacted by Vitalspace via WhatsApp, SMS, Phone, Email, etc.
                    </p>
                  </div>
                  <Button className="w-full">Submit</Button>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Rest assured, you'll receive a call from our sales expert within the next 5 minutes. (within working hours)</span>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-xs text-primary">
                      Read Disclaimer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* RERA ID */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {property.reraId}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;