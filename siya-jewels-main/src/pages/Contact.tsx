

import { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';


import ContactForm from '@/components/Contact/ContactForm';
import { faqs, serviceOptions } from '@/data/contactData';

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5 text-gold" />,
    title: 'Phone/WhatsApp',
    text: ['+91 8652429808'],
    href: 'tel:8652429808',
    note: 'Available Mon-Sat, 10 AM - 7 PM',
  },
  {
    icon: <Mail className="h-5 w-5 text-gold" />,
    title: 'Email',
    text: ['Harish@siyajewelsinfotech.com'],
    href: 'mailto:Harish@siyajewelsinfotech.com',
    note: 'We respond within 24 hours',
  },
  {
    icon: <Instagram className="h-5 w-5 text-gold" />,
    title: 'Instagram',
    text: ['@official_harishsoni'],
    href: 'https://instagram.com/official_harishsoni',
    note: 'Follow us for latest updates',
  },
  {
    icon: <MapPin className="h-5 w-5 text-gold" />,
    title: 'Office Location',
    text: ['Head Office: Mumbai, Maharashtra, India.', 'Branch Office: Surat, Ahemdabad, Banglore, Ujjain, India.'],
    note: 'Meetings by appointment only',
  },
]

const fadeUpVariant = {
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in your services!");
    window.open(`https://wa.me/8652429808?text=${message}`, '_blank');
  };

  function renderTextWithOptionalNewLine(text) {
    if (Array.isArray(text) && text.length === 2) {
      return (
        <>
          {text[0]}
          <br />
          {text[1]}
        </>
      );
    } else {
      if (Array.isArray(text)) {
        return text.join(' ');
      }
      return text;
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-10">
        {/* Header Section */}
        <section ref={ref} className="container py-12 pb-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={fadeLeft(0.2)}>
              <h1 className="text-4xl md:text-5xl font-playfair mb-6">
                Contact <span className="text-gold">Us</span>
              </h1>
              <p className="text-gray-700 max-w-2xl mb-10">
                Get in touch with us to discuss your project requirements or inquire about our services. We're here to help bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-12 bg-purple-light/5">
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm serviceOptions={serviceOptions} />

              {/* Contact Info */}
              <motion.div variants={fadeRight(0.2)} className='flex flex-col justify-center'>
                <h2 className="text-2xl font-playfair mt-2 mb-6">Get In Touch</h2>

                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 group-hover:bg-gold/30 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-gray-700 hover:text-gold transition-colors">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-gray-700 max-w-64">
                            {renderTextWithOptionalNewLine(item.text)}
                          </p>
                        )}
                        <p className="text-gray-500 text-sm mt-1">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button onClick={openWhatsApp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white group">
                    <MessageCircle className=" h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="pt-16 bg-white">
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-3xl font-playfair text-center mb-12" variants={fadeUpVariant}>
              Frequently Asked Questions
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 pb-5 transition-all duration-300 hover:border-gold"
                  variants={fadeUpVariant}
                >
                  <h3 className="font-playfair font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};



export default Contact;
