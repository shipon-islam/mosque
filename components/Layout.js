export default function Layout({ className = "bg-none", children }) {
  return (
    <section
      className={`${className} px-4 md:px-14  text-green-900  max-w-[1450px] mx-auto`}
    >
      {children}
    </section>
  );
}
