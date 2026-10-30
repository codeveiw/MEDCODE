
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/201551260673"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact MedCode on WhatsApp"
            title="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#20BA5A]"
        >
            <MessageCircle size={28} />
        </a>
    );
}
