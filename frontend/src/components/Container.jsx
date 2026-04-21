export function Container({ children, className = "", wide = false }) {
  const max = wide ? "max-w-[1400px]" : "max-w-6xl";
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-5 lg:px-6 ${max} ${className}`}
    >
      {children}
    </div>
  );
}
