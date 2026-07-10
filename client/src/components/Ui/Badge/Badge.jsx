function Badge({ children }) {
  return (
    <span className="rounded-full border px-4 py-2 text-sm font-medium">
      {children}
    </span>
  );
}

export default Badge;