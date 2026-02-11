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
  return (
    <main>
      <h1 className="text-2xl font-bold">Courses</h1>
      <p className="mt-2 text-sm text-gray-600">Course list shown as cards.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <div key={c.id} className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs text-gray-500">{c.id}</div>
                <h2 className="mt-1 font-semibold">{c.title}</h2>
              </div>

              <span
                className={
                  "rounded-full px-3 py-1 text-xs font-medium " +
                  (c.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : c.status === "Upcoming"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700")
                }
              >
                {c.status}
              </span>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <div>
                <span className="text-gray-500">Instructor:</span> {c.instructor}
              </div>
              <div>
                <span className="text-gray-500">Duration:</span> {c.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
