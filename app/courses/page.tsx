type Course = {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  status: "Active" | "Completed" | "Upcoming";
};

const courses: Course[] = [
  { id: "C001", title: "Web Development", instructor: "Mr. Silva", duration: "8 weeks", status: "Active" },
  { id: "C002", title: "Database Systems", instructor: "Ms. Perera", duration: "6 weeks", status: "Upcoming" },
  { id: "C003", title: "UI/UX Basics", instructor: "Mr. Fernando", duration: "4 weeks", status: "Completed" },
];

export default function CoursesPage() {
  const badge = (status: Course["status"]) => {
    if (status === "Active") return "bg-blue-200 text-blue-900";
    if (status === "Upcoming") return "bg-pink-200 text-pink-900";
    return "bg-green-200 text-green-900";
  };

  return (
    <main className="text-black">
      <h1 className="text-3xl font-extrabold">Courses</h1>
      <p className="mt-1 text-sm text-black/70">Take a Look at Courses.</p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-black/60">{c.id}</div>
                <h2 className="mt-1 text-xl font-extrabold">{c.title}</h2>
              </div>

              <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${badge(c.status)}`}>
                {c.status}
              </span>
            </div>

            <div className="mt-4 text-sm space-y-2">
              <div>
                <span className="font-bold">Instructor:</span> {c.instructor}
              </div>
              <div>
                <span className="font-bold">Duration:</span> {c.duration}
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl bg-[var(--blue-600)] text-white py-3 font-bold hover:opacity-95">
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
