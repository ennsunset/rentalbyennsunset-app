export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <strong className="text-xl">RentByEnn.</strong>
        <nav className="hidden gap-7 text-sm md:flex"><a href="#fleet">Our fleet</a><a href="#how">How it works</a></nav>
        <button className="rounded-full bg-black px-5 py-3 text-sm text-white">Sign in</button>
      </header>
      <section className="px-6 py-16 text-center md:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">Premium car rental</p>
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.95] md:text-8xl">Find the perfect ride.</h1>
        <p className="mx-auto mt-6 max-w-xl text-neutral-500">Premium vehicles. Simple booking. Your next journey starts here.</p>
      </section>
    </main>
  );
}
