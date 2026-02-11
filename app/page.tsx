export default function Home() {
  return (
    <main>
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold text-brand-dark">
        Dashboard Overview
      </h1>
      <p className="mt-1 text-sm text-brand-dark/70">
        Welcome back! Here's what's happening today.
      </p>

      {/* STATS */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Courses", value: 12 },
          { label: "Active Students", value: 245 },
          { label: "Instructors", value: 18 },
          { label: "Upcoming Classes", value: 5 },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-brand-light/40 bg-white p-5 shadow-sm"
          >
            <div className="text-sm text-brand-dark/70">
              {card.label}
            </div>
            <div className="mt-1 text-3xl font-bold text-brand-dark">
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-brand-dark">
          Quick Actions
        </h2>

        <div className="mt-3 flex gap-3">
          <button className="rounded-lg border border-brand-dark px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-light/10">
            Add Course
          </button>

          <button className="rounded-lg border border-brand-dark px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-light/10">
            Add Student
          </button>

          <button className="rounded-lg border border-brand-dark px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-light/10">
            View Reports
          </button>
        </div>
      </section>

      {/* LOWER GRID */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ACTIVITY */}
        <div className="rounded-2xl border border-brand-light/40 bg-white p-5">
          <h3 className="font-semibold text-brand-dark">
            Recent Activity
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-brand-dark">
            <li className="flex justify-between">
              <span>New student registered</span>
              <span className="text-brand-dark/60">2 mins ago</span>
            </li>

            <li className="flex justify-between">
              <span>Course updated: Web Dev</span>
              <span className="text-brand-dark/60">1 hour ago</span>
            </li>

            <li className="flex justify-between">
              <span>UI/UX course completed</span>
              <span className="text-brand-dark/60">Yesterday</span>
            </li>
          </ul>
        </div>

        {/* ANNOUNCEMENTS */}
        <div className="rounded-2xl border border-brand-light/40 bg-white p-5">
          <h3 className="font-semibold text-brand-dark">
            Announcements
          </h3>

          <p className="mt-3 text-sm text-brand-dark">
            🎓 Semester exams start next week. Please ensure all records
            are updated before Friday.
          </p>
        </div>
      </div>
    </main>
  );
}
