
import {
  Globe, ShoppingCart, Smartphone, Database,
  Gem, Diamond, Box, Camera, Video,
  Image, MessageSquare, Instagram, Mail, Settings,
  Pen, BookmarkCheck,
  Briefcase
} from 'lucide-react';

// Service data organized by categories
export const serviceCategories = [
  {
    id: 'tech',
    title: 'Tech Development',
    color: 'from-blue-500 to-purple-500',
    description: 'Cutting-edge digital solutions for modern businesses',
    services: [
      {
        id: 'website',
        title: 'Website Development',
        icon: Globe,
        media: ['/assets/images/webdev.jpg'],
        description: 'Custom-designed, responsive websites optimized for both performance and aesthetics.',
        benefits: ['SEO-friendly architecture', 'Mobile-optimized design', 'Content management system'],
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Development',
        icon: ShoppingCart,
        media: ['/assets/images/webdev2.webp'],
        description: 'Full-featured online stores with secure payment gateways and inventory management.',
        benefits: ['Secure payment processing', 'Product catalog management', 'Customer account features'],
      },
      {
        id: 'mobile',
        title: 'Mobile App Development',
        icon: Smartphone,
        media: ['/assets/images/app-dev.jpg'],
        description: 'Native and cross-platform applications for iOS and Android devices.',
        benefits: ['Intuitive user interface', 'Cross-platform compatibility', 'Push notification features'],
      },
      {
        id: 'billing',
        title: 'Billing Software Development',
        icon: Database,
        media: [
          '/assets/images/bill-dev1.jpg',
          // '/assets/images/bill-dev2.jpg'
        ],
        description: 'Custom billing solutions designed specifically for Jewellery businesses.',
        benefits: ['Inventory tracking', 'Sales analytics', 'Invoice generation'],
      }
    ]
  },
  {
    id: 'Jewellery',
    title: 'Jewellery Solutions',
    color: 'from-gold-light to-gold-dark',
    description: 'Professional Jewellery design and visualization services',
    services: [
      {
        id: 'cad',
        title: 'Jewellery CAD Designing',
        icon: Gem,
        media: ['/assets/images/jewellary-cad01.jpg',
          '/assets/images/jewellary-cad02.jpg', '/assets/images/jewellary-cad03.jpg',
          '/assets/images/jewellary-cad04.jpg'
        ],
        description: 'Precise computer-aided design for Jewellery pieces with attention to detail.',
        benefits: ['Production-ready files', 'Realistic previews', 'Multiple revisions'],
      },
      {
        id: 'rendering',
        title: '3D Jewellery Rendering',
        media: ['/assets/videos/3d-jewellary04.mp4', '/assets/images/3d-jewels01.jpg', '/assets/images/3d-jewels02.jpg'],
        icon: Box,
        description: 'Photorealistic 3D renderings of Jewellery for marketing and presentations.',
        benefits: ['Studio-quality images', 'Multiple angles', 'Material simulations'],
      },
      // {
      //   id: 'hiphop',
      //   title: 'Hip-Hop Cuban Jewellery CAD Design',
      //   icon: Diamond,
      //   description: 'Specialized designs for hip-hop and Cuban link style Jewellery.',
      //   benefits: ['Custom engravings', 'Gemstone placements', 'Unique closures'],
      // },
      {
        id: 'premium',
        title: 'Premium 5D Designing',
        icon: Box,
        media: ['/assets/videos/3d-jewellary01.mp4', '/assets/videos/3d-jewellary02.mp4', '/assets/videos/3d-jewellary03.mp4'],
        description: 'Ultra high-quality designs with advanced material simulation and details.',
        benefits: ['Superior detail work', 'Advanced gemstone settings', 'Complete set designs'],
      }
    ]
  },
  {
    id: 'creative',
    title: 'Creative & Media',
    color: 'from-pink-500 to-purple-500',
    description: 'Visual content creation for impactful marketing',
    services: [
      {
        id: 'product-photos',
        title: 'Product Photoshoot',
        icon: Camera,
        media: ['/assets/images/product-shoot01.jpg', '/assets/images/product-shoot02.jpg',
          '/assets/images/product-shoot03.jpg'],
        description: 'Professional photography services specialized for Jewellery and products.',
        benefits: ['360° product views', 'White background options', 'Detail closeups'],
      },
      {
        id: 'model-photos',
        title: 'Model Photoshoot',
        icon: Camera,
        media: ['/assets/videos/model-photoshoot01.mp4', '/assets/videos/model-photoshoot02.mp4', '/assets/videos/model-photoshoot03.mp4', '/assets/videos/model-photoshoot04.mp4'],
        description: 'Lifestyle photography showcasing Jewellery pieces being worn.',
        benefits: ['Professional models', 'Style direction', 'Environment selection'],
      },
      {
        id: 'videos',
        title: 'Creative Advertising Videos',
        icon: Video,
        media: ['/assets/videos/ad-videos01.mp4', '/assets/videos/ad-videos02.mp4', '/assets/videos/ad-videos03.mp4'],
        description: 'Eye-catching animated videos to showcase products and services.',
        benefits: ['Custom storyboarding', 'Professional voiceovers', 'Brand integration'],
      },
      {
        id: 'social-media',
        title: 'Social Media Management',
        icon: Image,
        media: ['/assets/images/social-media01.jpg', '/assets/images/social-media02.jpg', '/assets/images/social-media03.jpg'],
        description: 'Engaging visual content designed for social media platforms.',
        benefits: ['Platform-optimized sizes', 'Engagement-focused design', 'Consistent branding'],
      },
      // {
      //   id: 'ads',
      //   title: 'Advertisement Video Creation',
      //   icon: Video,
      //   description: 'Professional video advertisements for digital and social media channels.',
      //   benefits: ['Target audience focus', 'Call-to-action optimization', 'Various format options'],
      // }
    ]
  },
  {
    id: 'ai',
    title: 'AI Automation',
    color: 'from-cyan-500 to-blue-500',
    description: 'Intelligent automation solutions for business efficiency',
    services: [
      {
        id: 'chatbots',
        title: 'AI Chatbots & WhatsApp Automation',
        icon: MessageSquare,
        media: ['/assets/images/chatbot.jpg',
          // '/assets/videos/chatbot02.mp4', '/assets/videos/chatbot03.mp4'
        ],
        description: 'Intelligent chat systems that handle customer inquiries automatically.',
        benefits: ['24/7 customer support', 'Inquiry qualification', 'Seamless handoff to humans'],
      },
      {
        id: 'business-automation',
        title: 'AI Business Automation',
        icon: Briefcase,
        media: ['/assets/videos/ai-business.mp4', '/assets/images/ai-business02.jpg'],
        description: 'Automate Repetitive Tasks for Maximum Productivity.',
        benefits: ['Increased efficiency', 'Cost saving', 'Improved customer experience'],
      },
      // {
      //   id: 'email-automation',
      //   title: 'AI Email & Call Automation',
      //   icon: Mail,
      //   description: 'Intelligent systems for managing email campaigns and call scheduling.',
      //   benefits: ['Personalized messaging', 'Follow-up sequences', 'Response analytics'],
      // },
      {
        id: 'sales-automation',
        title: 'AI Sales & Operations Automation',
        icon: Settings,
        media: ['/assets/images/ai-sales01.jpg', '/assets/images/ai-sales02.jpg', '/assets/images/ai-sales03.jpg'],
        description: 'Comprehensive systems for streamlining sales and operational workflows.',
        benefits: ['Lead scoring', 'Sales pipeline automation', 'Operational efficiency metrics'],
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Legal',
    color: 'from-amber-500 to-red-500',
    description: 'Establish and protect your brand identity',
    services: [
      {
        id: 'logo',
        title: 'Logo Pre-Design',
        icon: Pen,
        media: ['/assets/images/branding01.jpg', '/assets/images/branding02.jpg',],
        description: 'Professional logo design services to establish your brand identity.',
        benefits: ['Multiple concepts', 'Vector file formats', 'Brand guidelines'],
      },
      {
        id: 'trademark',
        title: 'Trademark Club Registration Assistance',
        icon: BookmarkCheck,
        media: ['/assets/images/trademark02.jpg', '/assets/images/trademark01.jpg',],

        description: 'Support services for registering your brand trademark.',
        benefits: ['Application preparation', 'Registration monitoring', 'Renewal reminders'],
      }
    ]
  }
];