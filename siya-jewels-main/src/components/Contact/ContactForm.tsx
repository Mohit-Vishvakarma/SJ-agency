import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';

const fadeLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
    },
});

// Zod schema
const ContactSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Enter a valid email'),
    phone: z.string().optional(),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().min(5, 'Message is required'),
});

type ContactFormSchema = z.infer<typeof ContactSchema>;

interface ContactFormProps {
    serviceOptions: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({ serviceOptions }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const controls = useAnimation();
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormSchema>({
        resolver: zodResolver(ContactSchema),
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const onSubmit = async (data: ContactFormSchema) => {
        try {
            const response = await fetch('https://formspree.io/f/xjkwpnaz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Submission failed');

            toast({
                title: 'Success!',
                description: 'Your message has been sent successfully.',
            });
            reset();
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Something went wrong. Please try again later.',
                variant: 'destructive',
            });
        }
    };

    return (
        <motion.div
            ref={ref}
            className="bg-white p-8 rounded-lg shadow-md"
            variants={fadeLeft(0.2)}
            initial="hidden"
            animate={controls}
        >
            <h2 className="text-2xl font-playfair mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" {...register('name')} placeholder="John Doe" />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" {...register('email')} placeholder="john@example.com" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" {...register('phone')} placeholder="+91 987** **210" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <select
                            id="service"
                            {...register('service')}
                            className="w-full h-10 rounded-md border border-gray-300 px-3 py-2"
                        >
                            <option value="">Select a service</option>
                            {serviceOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <textarea
                        id="message"
                        rows={6}
                        {...register('message')}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                        placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </div>
                    )}
                </Button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
