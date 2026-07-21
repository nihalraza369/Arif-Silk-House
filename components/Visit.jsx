import Divider from "./Divider";

const hours = [
  { day: "Monday", time: "1 – 10 PM" },
  { day: "Tuesday", time: "1 – 10 PM" },
  { day: "Wednesday", time: "1 – 10 PM" },
  { day: "Thursday", time: "1 – 10 PM" },
  { day: "Friday", time: "3 – 10 PM" },
  { day: "Saturday", time: "1 – 10 PM" },
  { day: "Sunday", time: "Closed" },
];

const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0

export default function Visit() {
  return (
    <section id="visit" className="bg-ink text-ivory py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="font-body text-xs uppercase tracking-widest2 text-blush mb-4">
            Plan Your Visit
          </p>
          <h2 className="font-display text-4xl sm:text-5xl">Find Us on Tariq Road</h2>
          <div className="flex justify-center mt-6">
            <Divider tone="ivory" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-14 items-start">
          <div>
            <h3 className="font-display text-2xl mb-4">Hours</h3>
            <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
              {hours.map((h, i) => (
                <li
                  key={h.day}
                  className={`flex justify-between py-3 text-sm ${
                    i === todayIndex ? "text-blush" : "text-ivory/75"
                  }`}
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 text-sm text-ivory/80 leading-relaxed">
              <p className="font-display text-xl text-ivory not-italic mb-1">
                Arif Silk House
              </p>
              <p>Shop No. G-15, Marium Shopping Mall,</p>
              <p>Tariq Road, Block 2, P.E.C.H.S.,</p>
              <p>Karachi, 74200, Pakistan</p>
              <p className="pt-2">0332 8484398</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-7">
              <a
                href="tel:+923328484398"
                className="inline-flex items-center gap-2 rounded-full bg-maroon text-ivory px-6 py-3 text-sm hover:bg-maroon-bright transition-colors"
              >
                Call Boutique
              </a>
              <a
                href="https://wa.me/923328484398"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-6 py-3 text-sm hover:bg-ivory hover:text-ink transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Arif+Silk+House+Marium+Shopping+Mall+Tariq+Road+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-6 py-3 text-sm hover:bg-ivory hover:text-ink transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-ivory/15 h-[420px]">
            <iframe
              title="Arif Silk House location"
              className="w-full h-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Arif+Silk+House,+Shop+no+G+15,+Marium+Shopping+Mall,+Tariq+Rd,+Block+2+P.E.C.H.S.,+Karachi,+74200,+Pakistan&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
