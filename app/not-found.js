import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-5">
      <div className="text-center">
        <h1 className="font-display text-6xl text-ink/20">404</h1>
        <h2 className="font-display text-2xl text-ink mt-2">Page Not Found</h2>
        <p className="font-body text-sm text-ink/60 mt-3">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon-bright transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
