export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ivory/10 text-ivory/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-display text-xl text-ivory">Arif Silk House</p>
          <p className="text-xs mt-1">Tariq Road, Karachi &middot; Bridal Couture</p>
        </div>
        <p className="text-xs text-ivory/50 text-center">
          &copy; {new Date().getFullYear()} Arif Silk House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
