function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">

        <span className="inline-block rounded-full border px-4 py-2 text-sm font-medium">
          🚀 AI Powered Developer Platform
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight">
          Learn.
          <br />
          Build.
          <br />
          Grow with AI.
        </h1>

        <p className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto">
          DevVerse AI helps developers improve coding,
          prepare for interviews,
          build projects,
          analyze GitHub,
          and accelerate their career using AI.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="rounded-xl bg-black px-8 py-4 text-white font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="rounded-xl border px-8 py-4 font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;