"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="font-body bg-ivory text-ink antialiased">
        <main className="min-h-screen flex items-center justify-center px-5">
          <div className="text-center">
            <h1 className="font-display text-3xl text-ink mb-3">Something went wrong</h1>
            <p className="font-body text-sm text-ink/60 mb-6">
              {error?.message || "An unexpected error occurred."}
            </p>
            <button
              onClick={() => reset()}
              className="bg-maroon text-ivory font-body text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:bg-maroon-bright transition-colors"
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
