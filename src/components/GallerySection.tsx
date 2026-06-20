import BookCard from "./BookCard";

const books = [
  {
    title: "Buku Sadari Linkungan",
    author: "18 Ibu Yang Sadar Lingkungan",
    synopsis: "Pernahkah kalian berpikir, ke mana perginya sampah yang kalian buang setiap hari? Masalah yang terlihat sepele, seperti membuang sampah, ternyata bisa berdampak besar bagi bumi kita. Kesadaran inilah yang mendorong kami, para ibu dengan anak-anak seusia kalian, untuk menulis cerita-cerita tentang masalah lingkungan.",
    category: "Buku Anak",
    coverImage: "/coverImage/pic2.jpg",
    price: "3 Buku - Rp 128.000, 1 Buku - Rp 48.000", // current (discounted) price
    originalPrice: "", // original price to render as struck-through
    link :"https://forms.gle/JZ3FhL3p3UvCHA1e7",
  },
  {
    title: "Kepingan Puzzle Bintang",
    author: "Antie",
    synopsis: "Bintang adalah seorang ibu muda yang tampak tegar, tetapi sering kali ia tidak mengingat apa yang baru saja ia lakukan. Ada bagian dari dirinya yang terasa asing, seolah hidupnya menyimpan rahasia yang tak bisa ia jangkau.",
    category: "Self Improvement",
    coverImage: "/coverImage/pic1.png",
    price: "Rp 105.000", // current (discounted) price
    originalPrice: "Rp 117.000", // original price to render as struck-through
    link :"https://forms.gle/mygwkYQzgD8KiDkw6",
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
            Curated Books
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
