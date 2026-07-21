export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end sm:items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12411105/pexels-photo-12411105.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Bride in an ornate red bridal lehenga with traditional jewellery"
          className="h-full w-full object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-16 pt-40 sm:pb-24 w-full">
        <p className="fade-up font-body text-xs sm:text-sm uppercase tracking-widest2 text-blush/90 mb-5">
          Bridal Couture &middot; Tariq Road, Karachi
        </p>
        <h1
          className="fade-up font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-ivory text-shadow-soft max-w-3xl"
          style={{ animationDelay: "0.1s" }}
        >
          Arif Silk House
        </h1>
        <p
          className="fade-up font-display italic text-xl sm:text-2xl text-blush mt-5 max-w-xl"
          style={{ animationDelay: "0.22s" }}
        >
          Every dulhan deserves a dress made for her alone.
        </p>
        <p
          className="fade-up font-body text-ivory/85 text-sm sm:text-base mt-4 max-w-xl leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          Hand-finished barat, walima and mehndi lehengas &mdash; hasil karein classic
          Pakistani bridal wear, made to measure, with the finishing your day deserves.
        </p>

        <div
          className="fade-up flex flex-wrap items-center gap-4 mt-9"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-maroon text-ivory px-7 py-3.5 text-sm font-body tracking-wide hover:bg-maroon-bright transition-colors"
          >
            Shop Now
          </a>
          <a
            href="tel:+923328484398"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/50 text-ivory px-7 py-3.5 text-sm font-body tracking-wide hover:bg-ivory hover:text-maroon transition-colors"
          >
            Call Now &mdash; 0332 8484398
          </a>
          <a
            href="https://wa.me/923328484398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/50 text-ivory px-7 py-3.5 text-sm font-body tracking-wide hover:bg-ivory hover:text-maroon transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>

        <div
          className="fade-up flex items-center gap-3 mt-10 text-ivory/90 font-body text-sm"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-blush tracking-wide" aria-hidden="true">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span>5.0 rating &middot; 13 Google reviews</span>
        </div>
      </div>
    </section>
  );
}
