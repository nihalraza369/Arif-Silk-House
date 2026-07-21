import Divider from "./Divider";

const services = [
  { label: "In-store shopping", note: "Browse the full collection at Tariq Road" },
  { label: "In-store pickup", note: "Reserve online, collect at your convenience" },
  { label: "Delivery", note: "Across Karachi, on your timeline" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-body text-xs uppercase tracking-widest2 text-maroon mb-4">
            Since Tariq Road, Karachi
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            Craft that a dulhan
            <br />
            can trust.
          </h2>
          <div className="my-7 -ml-1">
            <div className="flex">
              <Divider />
            </div>
          </div>
          <p className="text-ink/75 leading-relaxed">
            Arif Silk House has quietly built a name among Karachi&rsquo;s brides for
            one reason: the finishing is never rushed. Every barat, walima and mehndi
            piece is stitched with the heavy dabka, zari and hand-embroidery work
            Pakistani bridal wear is known for, fitted to measure and delivered on
            time &mdash; the two things a bride worries about most.
          </p>
          <p className="text-ink/75 leading-relaxed mt-4">
            Walk in for a fitting, reserve a design and collect it later, or have it
            brought to your door. Shop no. G-15, Marium Shopping Mall, Tariq Road.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {services.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-line bg-white/60 px-4 py-5"
              >
                <p className="font-display text-lg text-maroon mb-1">{s.label}</p>
                <p className="text-xs text-ink/60 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 border border-maroon/30 rounded-lg hidden sm:block" />
          <img
            src="https://images.pexels.com/photos/11740295/pexels-photo-11740295.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Bride in ornate red bridal dress with traditional embroidery and jewellery"
            className="relative rounded-lg w-full h-[520px] object-cover object-top shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
