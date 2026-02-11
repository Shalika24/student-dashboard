export default function Footer() {
  return (
    <footer className="bg-[var(--blue-900)] text-white text-sm py-4 text-center">
      © {new Date().getFullYear()} Student Course Management Dashboard
    </footer>
  );
}
