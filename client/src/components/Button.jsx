function Button({
  children,
  variant = "primary",
  onClick,
}) {

  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",

    secondary:
      "border border-gray-300 hover:bg-gray-100",

    ghost:
      "hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;