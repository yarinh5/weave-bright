import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, MessageCircle, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const FloatingContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent(`פנייה חדשה מ-${formData.name}`);
      const body = encodeURIComponent(
        `שם: ${formData.name}\nאימייל: ${formData.email}\nטלפון: ${formData.phone}\n\nהודעה:\n${formData.message}`
      );
      
      window.location.href = `mailto:yarinhazan395@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("הטופס נשלח בהצלחה!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      toast.error("שגיאה בשליחת הטופס");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button - visible on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="פתח טופס יצירת קשר"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full" />
      </button>

      {/* Contact form modal */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Form container */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-card border-t border-glass-border rounded-t-3xl p-6 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Handle bar */}
          <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-4" />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="סגור"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-xl font-bold mb-4 text-right">השאירו פרטים</h3>

          <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
            <Input
              type="text"
              placeholder="שם מלא"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-muted/50 border-glass-border text-right"
            />
            <Input
              type="email"
              placeholder="אימייל"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-muted/50 border-glass-border text-right"
            />
            <Input
              type="tel"
              placeholder="טלפון"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-muted/50 border-glass-border text-right"
            />
            <textarea
              placeholder="הודעה"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full rounded-lg bg-muted/50 border border-glass-border p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary text-right"
            />
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  שלח
                  <Send className="w-5 h-5 mr-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FloatingContactForm;
