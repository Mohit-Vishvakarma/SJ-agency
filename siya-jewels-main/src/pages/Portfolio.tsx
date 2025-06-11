import { useEffect, useRef, useState, Suspense } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

import PortfolioCard from '@/components/Portfolio/PortfolioCard';
import AboutHeader from '@/components/About/AboutHeader';
import PortfolioModal from '@/components/Portfolio/PortfolioModal';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = (delay: number = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
});

const fadeRight = (delay: number = 0) => ({
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

// Data
const portfolioCategories = [
  'All',
  // 'Jewellery CAD',
  'Web Development',
  'Mobile Apps',
  // 'Creative Media',
  // 'Branding'
];

const portfolioItems = [
  {
    id: 1,
    title: 'Xaneur – Innovate, Design & Elevate.',
    category: 'Web Development',
    image: '/assets/images/xaneur.com.png',
    link: 'https://xaneur.com/',
    description: 'AI automation, web and app development to streamline business workflows.'
  },
  {
    id: 2,
    title: 'Agentic Bharat',
    category: 'Web Development',
    image: '/assets/images/agenticbharat.ai.png',
    link: 'https://agenticbharat.ai/',
    description: 'India’s platform for innovation, leadership, and growth in agentic AI.'
  },
  {
    id: 3,
    title: 'Cafe Desire Online',
    category: 'Web Development',
    image: '/assets/images/cafedesireonline.com.png',
    link: 'https://www.cafedesireonline.com',
    description: 'E-commerce site for Cafe Desire’s premium beverages and accessories.'
  },
  {
    id: 4,
    title: 'Chanson Quality Water – Alkaline Water Ionizers & Purifiers India',
    category: 'Web Development',
    image: '/assets/images/chansonqualitywater.com.png',
    link: 'https://chansonqualitywater.com/',
    description: 'Alkaline water ionizers and purifiers for healthier drinking water in India.'
  },
  {
    id: 5,
    title: 'Aarya24KT – Pure 24kt Gold Foil Gifts & Artifacts',
    category: 'Web Development',
    image: '/assets/images/aarya24kt.in.png',
    link: 'https://aarya24kt.in/',
    description: 'Premium 24kt gold foil gifts, decor, and corporate collectibles online.'
  },

  // {
  //   id: 3,
  //   title: 'Luxury Watch Campaign',
  //   category: 'Creative Media',
  //   image: '/watch.webp',
  //   description: 'Photography and video production for a luxury watch launch.'
  // },
  // {
  //   id: 4,
  //   title: 'Diamond Traders Logo',
  //   category: 'Branding',
  //   image: '/diamondlogo.webp',
  //   description: 'Complete brand identity for an international diamond trading company.'
  // },
  // {
  //   id: 5,
  //   title: 'Gemstone Pendant Series',
  //   category: 'Jewellery CAD',
  //   image: '/pandant.webp',
  //   description: 'Detailed CAD designs for a series of gemstone pendants.'
  // },
  // {
  //   id: 6,
  //   title: 'Gold Earrings Collection',
  //   category: 'Jewellery CAD',
  //   image: '/earings.webp',
  //   description: '3D rendering of an exclusive gold earrings collection.'
  // }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedItem, setSelectedItem] = useState(null);

  // Section Refs and Animations
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  const headerControls = useAnimation();
  const gridControls = useAnimation();
  const ctaControls = useAnimation();

  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (gridInView) gridControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [headerInView, gridInView, ctaInView]);

  useEffect(() => {
    setFilteredItems(filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter));
  }, [filter]);

  const openItemDetails = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeItemDetails = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="container pt-12 pb-2">
          <AboutHeader
            portfolioCategories={portfolioCategories}
            filter={filter}
            setFilter={setFilter}
          />
        </section>

        {/* Portfolio Grid */}
        <section className="container py-6">
          <div className=" h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <PortfolioCard item={item} onClick={openItemDetails} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section ref={ctaRef} initial="hidden" animate={ctaControls} className="py-16 bg-purple-light/10 mt-16">
          <div className="container text-center">
            <motion.h2 variants={fadeRight(0.2)} className="text-3xl font-playfair mb-6">
              Like What You See?
            </motion.h2>
            <motion.p variants={fadeLeft(0.3)} className="text-gray-700 max-w-2xl mx-auto mb-8">
              Let's discuss how we can create something amazing for your business. Our team is ready to bring your vision to life.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild className="bg-gold hover:bg-gold-dark text-white">
                <a href="/contact">
                  Start Your Project <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Modal */}
      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={closeItemDetails} />
      )}

      <Footer />
    </>
  );
};

export default Portfolio;
