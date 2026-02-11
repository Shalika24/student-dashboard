type Course = {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  status: "Active" | "Completed" | "Upcoming";
};

const courses: Course[] = [
  {
    id: "C001",
    title: "Web Development",
    instructor: "Mr. Silva",
    duration: "8 weeks",
    status: "Active",
  },
  {
    id: "C002",
    title: "Database Systems",
    instructor: "Ms. Perera",
    duration: "6 weeks",
    status: "Upcoming",
  },
  {
    id: "C003",
    title: "UI/UX Basics",
    instructor: "Mr. Fernando",
    duration: "4 weeks",
    status: "Completed",
  },
];

export default function CoursesPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-[#2A514C]">Courses</h1>
      <p className="mt-2 text-sm text-[#2A514C]/80">
        Course list shown as cards.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl border-2 border-[#B67452] bg-white p-5 shadow-sm transition hover:shadow-md text-[#2A514C]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-[#2A514C]/70">
                  {c.id}
                </div>
                <h2 className="mt-1 text-lg font-bold">
                  {c.title}
                </h2>
              </div>

              {/* STATUS BADGE */}
              <span
                className={
                  "rounded-full px-3 py-1 text-xs font-bold " +
                  (c.status === "Active"
                    ? "bg-[#C7DBFF] text-[#1F3A8A]"
                    : c.status === "Upcoming"
                    ? "bg-[#F7C2B8] text-[#8A2E2E]"
                    : "bg-[#B6F7C1] text-[#1F6B3F]")
                }
              >
                {c.status}
              </span>
            </div>

            <div className="mt-4 space-y-1 text-sm">
              <div>
                <span className="font-semibold">
                  Instructor:
                </span>{" "}
                {c.instructor}
              </div>

              <div>
                <span className="font-semibold">
                  Duration:
                </span>{" "}
                {c.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
