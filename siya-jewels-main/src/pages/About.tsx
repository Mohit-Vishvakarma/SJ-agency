

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Gem } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Mehta",
    position: "Owner, Mehta Jewellers",
    text: "Siya Jewels Infotech transformed our business with their CAD designs and website. Their understanding of both Jewellery and technology is truly unique."
  },
  {
    name: "Priya Shah",
    position: "Marketing Director, Gold Emporium",
    text: "The team's expertise in both Jewellery and technology made the development process incredibly smooth. Our e-commerce site has boosted sales by 45%."
  },
  {
    name: "Vikram Singh",
    position: "CEO, Diamond Exports Ltd.",
    text: "Working with Harish and his team has been exceptional. Their AI chatbot has dramatically improved our customer service efficiency."
  }
];

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

const About = () => {
  // Refs for each section
  const introRef = useRef(null);
  const founderRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);
  const headerRef = useRef(null);

  // Use useInView from framer-motion (latest API)
  const introInView = useInView(introRef, { once: true, amount: 0.2 });
  const founderInView = useInView(founderRef, { once: true, amount: 0.2 });
  const testimonialInView = useInView(testimonialRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header Section */}
        <motion.section
          ref={headerRef}
          className="container py-12 pb-1"
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h1 variants={fadeLeft(0.2)} className="text-4xl md:text-5xl font-playfair mb-6">
            About <span className="text-gold">Us</span>
          </motion.h1>
          <motion.div variants={fadeRight(0.3)} className="w-20 h-1 bg-gold mb-10"></motion.div>
        </motion.section>

        {/* Company Introduction */}
        <motion.section
          ref={introRef}
          className="py-16 bg-purple-light/5 relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
        >
          <div className="container">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeLeft(0.2)}>
                <h2 className="text-3xl font-playfair mb-6">
                  The Origin Story of <span className="text-gold">Siya Jewels Infotech</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Founded on the vision of bridging traditional Jewellery craftsmanship with cutting-edge technology...
                </p>
                <p className="text-gray-700 mb-6">
                  Our journey began when Harish Soni, with his deep knowledge...
                </p>
                <div className="flex flex-wrap gap-8 mb-6">
                  {[
                    { label: "Premium Quality", Icon: Award },
                    { label: "Client-Focused", Icon: Users },
                    { label: "Dual Expertise", Icon: Gem }
                  ].map(({ label, Icon }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <Icon className="text-gold h-5 w-5" />
                      </div>
                      <span className="font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeRight(0.2)}
                className="relative bg-white bg-opacity-60">
                <div className="rounded-lg overflow-hidden shadow-gold h-[350px] md:h-[400px] flex items-center justify-center relative">
                  <img src="/siyajewels-logo.jpg" className='w-full md:w-screen h-full md:h-auto xl:h-[600px] 2xl:h-[560px]' alt="Siya Jewels Infotech Logo" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Founder Bio */}
        <motion.section
          ref={founderRef}
          className="py-16 bg-white"
          variants={fadeUp}
          initial="hidden"
          animate={founderInView ? "visible" : "hidden"}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={founderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-40 h-40 bg-gold/20 rounded-full -translate-x-20 -translate-y-20 z-0"></div>
                <div className="rounded-lg overflow-hidden shadow-lg relative sm:h-[300px] md:h-[400px] z-10">
                  <img src="/assets/images/owner02.jpg" alt="Founder Harish Soni" className='h-[350px] md:h-[495px] object-cover w-screen' />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={founderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-3xl font-playfair mb-6">
                  Meet Our <span className="text-gold">Founder</span>
                </h2>
                <h3 className="text-xl font-playfair text-purple-dark mb-4">Harish Soni</h3>
                <p className="text-gray-700 mb-6">
                  Harish Soni's journey represents a unique evolution from being a skilled jeweler to becoming a tech innovator...
                </p>
                <p className="text-gray-700 mb-6">
                  Combining his Jewellery expertise with a passion for technology...
                </p>
                <p className="text-gray-700 mb-6">
                  Today, Harish leads a team that bridges the gap between traditional craftsmanship and modern solutions...
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          ref={testimonialRef}
          className="py-16 bg-purple-light/10"
          variants={fadeUp}
          initial="hidden"
          animate={testimonialInView ? "visible" : "hidden"}
        >
          <div className="container">
            <h2 className="text-3xl font-playfair text-center mb-12">
              What Our <span className="text-gold">Clients</span> Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden hover:shadow-gold transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-gold text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                  <p className="text-gray-700 italic mb-6 relative z-10">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <div className="w-full h-full bg-gold/20 flex items-center justify-center text-gold font-medium">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          ref={ctaRef}
          className="py-16 bg-gray-50 text-black"
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
        >
          <div className="container text-center">
            <motion.h2 variants={fadeLeft(0.2)} className="text-3xl md:text-4xl font-playfair mb-6">Ready to Work With Us?</motion.h2>
            <motion.p variants={fadeRight(0.2)} className="text-gray-700 max-w-2xl mx-auto mb-8">
              Experience the difference of working with a team that understands both the Jewellery industry and cutting-edge technology.
            </motion.p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <a href="/contact">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </motion.section>
      </main >
      <Footer />
    </>
  );
};

export default About;
