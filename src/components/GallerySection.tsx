import BookCard from "./BookCard";

const books = [
  {
    title: "The Silent Hours",
    author: "Eleanor Vance",
    synopsis: "A poetic exploration of solitude and self-discovery set against the backdrop of a remote coastal village.",
    category: "Literary Fiction",
    coverImage: "/coverImage/the-silent-hours.jpg",
    price: "Rp 89.000",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
            Curated E-Books
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Handpicked stories that speak to the soul, waiting to become your next favorite read.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
