import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-black">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-black/70">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Courses", value: "12" },
          { label: "Active Students", value: "245" },
          { label: "Instructors", value: "18" },
          { label: "Upcoming Classes", value: "5" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm"
          >
            <div className="text-sm text-black/70">{s.label}</div>
            <div className="mt-2 text-3xl font-extrabold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Actions + panels */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1 rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold">Quick Actions</h2>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/courses">
              <button className="w-full rounded-xl bg-[var(--blue-600)] text-white py-3 font-bold hover:opacity-95">
                Add Course
              </button>
            </Link>
            <Link href="/students">
              <button className="w-full rounded-xl bg-[var(--blue-100)] text-black py-3 font-bold border border-[var(--border)] hover:bg-[var(--blue-200)]">
                Add Student
              </button>
            </Link>
            <button className="rounded-xl bg-white text-black py-3 font-bold border border-[var(--border)] hover:bg-[var(--blue-100)]">
              View Reports
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <ul className="mt-4 space-y-3 text-sm text-black/80">
              <li className="flex justify-between">
                <span>New student registered</span>
                <span className="text-black/60">2 mins ago</span>
              </li>
              <li className="flex justify-between">
                <span>Course updated: Web Dev</span>
                <span className="text-black/60">1 hour ago</span>
              </li>
              <li className="flex justify-between">
                <span>UI/UX course completed</span>
                <span className="text-black/60">Yesterday</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">Announcements</h2>
            <div className="mt-4 rounded-xl bg-[var(--blue-100)] p-4 border border-[var(--border)] text-sm">
              📣 Semester exams start next week. Please ensure all records are
              updated before Friday.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}