function Heading({ children }) {
  return (
    <h1 className="text-5xl md:text-7xl font-black leading-tight">
      {children}
    </h1>
  );
}

export default Heading;