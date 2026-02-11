export default function Footer() {
  return (
    <footer className="h-12 bg-[#1e3a8a] text-white px-6 flex items-center justify-center text-sm font-medium shadow-inner">
      © {new Date().getFullYear()} Student Course Management Dashboard
    </footer>
  );
}
