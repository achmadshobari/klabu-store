import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const bookTitle = searchParams.get("book") || "Selected Book";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <BookOpen className="w-5 h-5 text-primary transition-transform group-hover:scale-105" />
              <span className="font-serif text-xl font-semibold text-primary">
                Gray Library
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-serene/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CreditCard className="w-8 h-8 text-serene" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
              Complete Your Purchase
            </h1>

            {/* Book Title */}
            <p className="text-lg text-muted-foreground mb-8">
              You're purchasing: <span className="font-medium text-foreground">{bookTitle}</span>
            </p>

            {/* Placeholder Message */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure Checkout</span>
              </div>
              <p className="text-muted-foreground">
                This is a demo checkout page. In a real application, you would integrate 
                a payment gateway here to process transactions securely.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="serene" size="lg" disabled>
                Proceed to Payment
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Continue Browsing</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
