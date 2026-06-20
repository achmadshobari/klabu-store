import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
           <img src="/klabu.png" alt="Klabu Store" className="w-12 h-12" />            

            <span className="font-serif text-xl font-semibold text-primary">
              Klabu Store
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm max-w-md mb-8">
            Where every story finds its home. Curated with care for readers who cherish the written word.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-border mb-8" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-serene fill-serene" /> for book lovers
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Klabu Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
