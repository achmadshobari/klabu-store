import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  title: string;
  author: string;
  synopsis: string;
  category: string;
  coverImage: string;
  price: string;
}

const BookCard = ({ title, author, synopsis, category, coverImage, price }: BookCardProps) => {
  const handleBuy = () => {
    window.location.href = `/checkout?book=${encodeURIComponent(title)}`;
  };

  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      {/* Book Cover */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={coverImage}
          alt={`Cover of ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Book Information */}
      <div className="p-6">
        {/* Category Badge */}
        <Badge variant="category" className="mb-3">
          {category}
        </Badge>

        {/* Title - More prominent */}
        <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1 leading-snug">
          {title}
        </h3>

        {/* Author - Less prominent */}
        <p className="text-sm text-muted-foreground mb-3">
          by {author}
        </p>

        {/* Synopsis - Truncated */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {synopsis}
        </p>

        {/* Price and Buy Button */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-serif text-lg font-semibold text-card-foreground">
            {price}
          </span>
          <Button
            variant="serene"
            size="sm"
            onClick={handleBuy}
          >
            Beli Sekarang
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
