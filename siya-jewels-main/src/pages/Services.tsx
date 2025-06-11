
import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { serviceCategories } from '../data/servicesData';
import ServicesHeader from '../components/services/ServicesHeader';
import ServiceCategory from '../components/services/ServiceCategory';
import ServiceCTA from '../components/services/ServiceCTA';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        setActiveCategory(id);
      }
    }
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);

    if (categoryId !== 'all') {
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 ">
        {/* Header Section with 3D Animation */}
        <ServicesHeader
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          serviceCategories={serviceCategories}
        />

        {/* Services by category */}
        {serviceCategories.map((category) => (
          <ServiceCategory
            key={category.id}
            id={category.id}
            title={category.title}
            color={category.color}
            description={category.description}
            services={category.services}
            isLoaded={isLoaded}
          />
        ))}

        {/* CTA Section */}
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
};

export default Services;
