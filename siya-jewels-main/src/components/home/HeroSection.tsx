import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-white relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-purple-dark"></div> */}

      {/* Background pattern */}
      {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#9b87f5_25%,transparent_25%,transparent_50%,#9b87f5_50%,#9b87f5_75%,transparent_75%,transparent)] bg-[length:24px_24px]"></div> */}

      {/* Content container */}
      <div className="container relative z-10 py-24 flex justify-center flex-col md:flex-row items-center">
        <div className="md:w-4/5 mt-12 md:mt-0 flex flex-col items-center text-center justify-center">
          <h1
            className={`font-playfair text-4xl md:text-5xl lg:text-6xl text-black mb-4 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.2s]' : ''}`}
          >
            Transforming <span className="text-gold">Jewellery</span> & <span className="text-gold">Technology</span>
          </h1>
          <p
            className={`text-purple-dark mb-6 max-w-lg opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.4s]' : ''}`}
          >
            Siya Jewels Infotech blends the art of premium Jewellery design with cutting-edge technology solutions. We create bespoke experiences for jewelers and businesses.
          </p>
          <div className={`flex justify-center gap-4 opacity-0 ${isLoaded ? 'animate-fade-in [animation-delay:0.6s]' : ''}`}>
            <Button asChild className=" bg-gold hover:bg-gold-dark text-white">
              <Link to="/about">
                Discover Our Story <ArrowRight size={16} className="ml-0" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-black/20 hover:text-purple-dark hover:bg-white/10">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

    </section >
  );
};

export default HeroSection;
