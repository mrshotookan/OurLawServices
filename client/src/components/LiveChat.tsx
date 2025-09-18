import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "15555555555";
    const message = "Hello, I would like to inquire about your legal services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="live-chat-widget">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl border border-border p-6 w-80 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-primary">Need Legal Help?</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              data-testid="close-chat-button"
            >
              <X size={16} />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Get instant answers to your legal questions. Click below to start a conversation with our team.
          </p>
          
          <div className="space-y-2">
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={openWhatsApp}
              data-testid="whatsapp-chat-button"
            >
              Chat on WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              asChild
              data-testid="schedule-consultation-button"
            >
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      ) : null}
      
      <Button
        className="bg-accent text-accent-foreground w-16 h-16 rounded-full shadow-lg hover:bg-accent/90 transition-all transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="chat-toggle-button"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
