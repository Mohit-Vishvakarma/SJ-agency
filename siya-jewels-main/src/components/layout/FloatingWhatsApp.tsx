
const FloatingWhatsApp = () => {
    const phoneNumber = '918652429808'; // Add your full phone number with country code
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform"
        >
            {/* <img
                src="/whatsapp-icon.png" // Store icon in public folder or use a CDN
                alt="WhatsApp"
                className="w-12 h-12"
            /> */}
            <div className="relative w-12 h-12 ">
                {/* Pulsing Ring */}
                <span className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping" />
                {/* Static Ring Background */}
                <span className="absolute inset-0 rounded-full border-2 border-green-600" />
                {/* WhatsApp Icon */}
                <img
                    src="/whatsapp-icon.png" // Your PNG icon path
                    alt="WhatsApp"
                    className="w-12 h-12 bg-transparent z-10 relative"
                />
            </div>
        </a >
    );
};

export default FloatingWhatsApp;
