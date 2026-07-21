import Divider from "./Divider";

const photos = [
  {
    id: "11727996",
    caption: "Ornate Red Lehenga",
    tall: true,
  },
  {
    id: "11746621",
    caption: "Traditional Drape",
  },
  {
    id: "12747884",
    caption: "Zardozi Detail",
  },
  {
    id: "11740294",
    caption: "Reception Elegance",
    tall: true,
  },
  {
    id: "12791933",
    caption: "Classic Bridal Red",
  },
  {
    id: "11729317",
    caption: "Barat Silhouette",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="motif-bg py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="font-body text-xs uppercase tracking-widest2 text-maroon mb-4">
            The Bridal Edit
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">Dresses, in Detail</h2>
          <div className="flex justify-center mt-6">
            <Divider />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-14">
          {photos.map((p) => (
            <div
              key={p.id}
              className={`group relative overflow-hidden rounded-md ${
                p.tall ? "row-span-2" : ""
              }`}
            >
              <img
                src={`https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=900`}
                alt={p.caption}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  p.tall ? "h-full min-h-[280px] sm:min-h-[420px]" : "h-[200px] sm:h-[280px]"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-3 font-display italic text-ivory text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {p.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ink/50 mt-8">
          A glimpse of our bridal styling &mdash; visit the boutique to see the full collection.
        </p>
      </div>
    </section>
  );
}
