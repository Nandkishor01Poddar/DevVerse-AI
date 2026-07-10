function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",

    secondary:
      "border border-gray-300 hover:bg-gray-100",

    ghost:
      "hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;