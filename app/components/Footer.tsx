export default function Footer() {
  return (
    <footer className="h-12 border-t bg-white px-4 flex items-center text-sm text-gray-600">
      © {new Date().getFullYear()} Student Course Management Dashboard
    </footer>
  );
}
