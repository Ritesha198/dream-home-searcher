import SearchForm from "./SearchForm";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your
            <span className="bg-hero-gradient bg-clip-text text-transparent"> Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover the perfect property from thousands of listings. Your ideal home is just a search away.
          </p>
        </div>

        {/* Search Form */}
        <SearchForm />

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
            <div className="text-white/80 text-sm">Properties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">5K+</div>
            <div className="text-white/80 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
            <div className="text-white/80 text-sm">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
            <div className="text-white/80 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;