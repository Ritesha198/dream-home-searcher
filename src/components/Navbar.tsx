import { Button } from "@/components/ui/button";
import { Building2, Menu, Phone, Heart, User, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">PropertyHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Buy <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Residential</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Apartments</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Villas</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Plots</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Rent <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Residential Rent</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Commercial Rent</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Co-living</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">PG</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Sell <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Post Property</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Free Valuation</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Price Trends</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Commercial <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border">
                <DropdownMenuItem>
                  <a href="#" className="w-full">Office Space</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Retail Space</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Warehouse</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#" className="w-full">Industrial</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span>PropertyHub</span>
                </SheetTitle>
                <SheetDescription>
                  Find your dream property
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Buy
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Rent
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Sell
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  Commercial
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors py-2">
                  About
                </a>
                <div className="pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start mt-2">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;