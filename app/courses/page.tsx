"use client";

import { useMemo, useState } from "react";
import { EmptyState, ErrorState, LoadingState } from "../components/ui/States";

type CourseStatus = "Active" | "Completed" | "Upcoming";

type Course = {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  status: CourseStatus;
};

const initialCourses: Course[] = [
  { id: "C001", title: "Web Development", instructor: "Mr. Silva", duration: "8 weeks", status: "Active" },
  { id: "C002", title: "Database Systems", instructor: "Ms. Perera", duration: "6 weeks", status: "Upcoming" },
  { id: "C003", title: "UI/UX Basics", instructor: "Mr. Fernando", duration: "4 weeks", status: "Completed" },
];

const badgeClass = (status: CourseStatus) => {
  if (status === "Active") return "bg-blue-200 text-blue-900";
  if (status === "Upcoming") return "bg-pink-200 text-pink-900";
  return "bg-green-200 text-green-900";
};

export default function CoursesPage() {
  // UI states
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  // data
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  // search + filter
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | CourseStatus>("All");

  // add form
  const [form, setForm] = useState({
    id: "",
    title: "",
    instructor: "",
    duration: "",
    status: "Active" as CourseStatus,
  });
  const [formError, setFormError] = useState<string>("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return courses.filter((c) => {
      const matchesQuery =
        !query ||
        c.id.toLowerCase().includes(query) ||
        c.title.toLowerCase().includes(query) ||
        c.instructor.toLowerCase().includes(query);

      const matchesStatus = statusFilter === "All" ? true : c.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [courses, q, statusFilter]);

  const simulateLoad = async () => {
    setShowError(false);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
  };

  const addCourse = async () => {
    setFormError("");

    // basic validation
    if (!form.id.trim() || !form.title.trim() || !form.instructor.trim() || !form.duration.trim()) {
      setFormError("Please fill all fields.");
      return;
    }
    if (courses.some((c) => c.id.toLowerCase() === form.id.trim().toLowerCase())) {
      setFormError("Course ID already exists.");
      return;
    }

    await simulateLoad();

    setCourses((prev) => [
      { ...form, id: form.id.trim().toUpperCase(), title: form.title.trim(), instructor: form.instructor.trim(), duration: form.duration.trim() },
      ...prev,
    ]);

    setForm({ id: "", title: "", instructor: "", duration: "", status: "Active" });
  };

  return (
    <main className="text-black">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Courses</h1>
          <p className="mt-1 text-sm text-black/70">Search, filter, and add new courses.</p>
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-xl bg-[var(--blue-600)] px-4 py-2 text-sm font-bold text-white hover:opacity-95"
            onClick={simulateLoad}
          >
            Refresh
          </button>
          <button
            className="rounded-xl border px-4 py-2 text-sm font-bold hover:bg-[var(--blue-100)]"
            onClick={() => setShowError((v) => !v)}
          >
            Toggle Error
          </button>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          className="rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--border)]"
          placeholder="Search by ID / title / instructor..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select
          className="rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--border)]"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
        >
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Completed">Completed</option>
        </select>

        <div className="rounded-xl border bg-white px-4 py-3 text-sm">
          <span className="font-bold">{filtered.length}</span> result(s)
        </div>
      </div>

      {/* Add Form */}
      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-extrabold">Add Course</h2>
        <p className="mt-1 text-sm text-black/70">Dummy form with validation.</p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-5">
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="ID (e.g., C010)"
            value={form.id} onChange={(e) => setForm((p) => ({ ...p, id: e.target.value }))} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Title"
            value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Instructor"
            value={form.instructor} onChange={(e) => setForm((p) => ({ ...p, instructor: e.target.value }))} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Duration (e.g., 5 weeks)"
            value={form.duration} onChange={(e) => setForm((p) => ({ ...p, duration: e.target.value }))} />
          <select className="rounded-xl border px-3 py-2 text-sm"
            value={form.status} onChange={(e) => setForm((p) => ({ ...p, status: e.target.value as CourseStatus }))}>
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {formError && <div className="mt-3 text-sm font-semibold text-red-700">{formError}</div>}

        <button
          className="mt-4 rounded-xl bg-[var(--blue-600)] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95"
          onClick={addCourse}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Course"}
        </button>
      </div>

      {/* States */}
      <div className="mt-6 space-y-4">
        {loading && <LoadingState label="Loading courses..." />}
        {showError && <ErrorState subtitle="This is a demo error UI (toggle it off)." />}
        {!loading && !showError && filtered.length === 0 && <EmptyState title="No courses found" />}
      </div>

      {/* Cards */}
      {!loading && !showError && filtered.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.id} className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-black/60">{c.id}</div>
                  <h3 className="mt-1 text-xl font-extrabold">{c.title}</h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${badgeClass(c.status)}`}>
                  {c.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div><span className="font-bold">Instructor:</span> {c.instructor}</div>
                <div><span className="font-bold">Duration:</span> {c.duration}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
