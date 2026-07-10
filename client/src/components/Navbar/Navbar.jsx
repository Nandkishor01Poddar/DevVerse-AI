function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="text-2xl font-black">
          DevVerse AI
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Roadmap</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-lg bg-black px-5 py-3 text-white">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;