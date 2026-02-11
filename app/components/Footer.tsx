export default function Footer() {
  return (
    <footer className="h-12 bg-[#2A514C] px-4 flex items-center justify-center text-sm font-medium text-white">
      © {new Date().getFullYear()} Student Course Management Dashboard
    </footer>
  );
}
