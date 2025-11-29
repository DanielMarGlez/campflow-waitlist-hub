import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send to your backend/database
    console.log("Waitlist signup:", email);
    
    setIsSubmitted(true);
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when CampFlow launches.",
    });
    
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center space-y-4 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Check your inbox!</h3>
        <p className="text-muted-foreground">
          We've sent you a confirmation email. You're all set for early access.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <Button 
          type="submit"
          className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
        >
          Join Waitlist
        </Button>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Be the first to experience the future of camping management
      </p>
    </form>
  );
};
