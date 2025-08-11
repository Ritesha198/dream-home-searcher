import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";

const SearchForm = () => {
  return (
    <div className="bg-background rounded-lg shadow-search p-6 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Select City */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Select City</label>
          <Select defaultValue="ahmedabad">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search By */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Search By</label>
          <Select defaultValue="area">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Search By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="area">Area/project/builder</SelectItem>
              <SelectItem value="locality">Locality</SelectItem>
              <SelectItem value="landmark">Landmark</SelectItem>
              <SelectItem value="project">Project Name</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Select BHK */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Select BHK</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="BHK" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1bhk">1 BHK</SelectItem>
              <SelectItem value="2bhk">2 BHK</SelectItem>
              <SelectItem value="3bhk">3 BHK</SelectItem>
              <SelectItem value="4bhk">4 BHK</SelectItem>
              <SelectItem value="5bhk">5+ BHK</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Select Budget */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Select Budget</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-50">Under ₹50 Lakh</SelectItem>
              <SelectItem value="50-1cr">₹50 Lakh - 1 Cr</SelectItem>
              <SelectItem value="1-2cr">₹1 - 2 Cr</SelectItem>
              <SelectItem value="2-5cr">₹2 - 5 Cr</SelectItem>
              <SelectItem value="above-5cr">Above ₹5 Cr</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="outline" size="lg" className="flex-1">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;