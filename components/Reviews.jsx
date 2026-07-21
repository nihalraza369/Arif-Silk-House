import Divider from "./Divider";

const reviews = [
  {
    name: "Sadia Bilal",
    meta: "2 reviews",
    text: "I have a great experience... perfect quality with timely delivery! Thank you!",
  },
  {
    name: "Muhammad Usman",
    meta: "3 reviews",
    text: "One of the finest bridal boutiques in Karachi!",
  },
  {
    name: "Rukhsar Fatima",
    meta: "3 reviews",
    text: "All the dresses were amazing.",
  },
  {
    name: "Muhammad Moiz Nasir",
    meta: "1 review",
    text: "Best experience.",
  },
  {
    name: "SR Rajani",
    meta: "1 review",
    text: "Beautiful dresses.",
  },
  {
    name: "Huzaifa Ansari",
    meta: "2 reviews",
    text: "Amazing dresses.",
  },
];

function Stars() {
  return (
    <span className="text-maroon tracking-wide" aria-hidden="true">
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="grid md:grid-cols-[280px_1fr] gap-14">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="font-body text-xs uppercase tracking-widest2 text-maroon mb-4">
            Google Reviews
          </p>
          <p className="font-display text-7xl leading-none">5.0</p>
          <div className="mt-3 text-xl">
            <Stars />
          </div>
          <p className="text-sm text-ink/60 mt-3">Based on 13 reviews</p>
          <div className="mt-6">
            <Divider />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-lg border border-line bg-white/60 p-6 flex flex-col gap-3"
            >
              <Stars />
              <p className="font-display italic text-lg leading-snug text-ink/90">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-xs text-ink/50 mt-auto pt-2">
                {r.name} &middot; {r.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
