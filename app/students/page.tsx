"use client";

import { useMemo, useState } from "react";
import { EmptyState, ErrorState, LoadingState } from "../components/ui/States";

type StudentStatus = "Active" | "Inactive";

type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  status: StudentStatus;
};

const initialStudents: Student[] = [
  { id: "S001", name: "Nimal Perera", email: "nimal@gmail.com", course: "Web Development", status: "Active" },
  { id: "S002", name: "Kamal Silva", email: "kamal@gmail.com", course: "Database Systems", status: "Active" },
  { id: "S003", name: "Sahan Fernando", email: "sahan@gmail.com", course: "UI/UX Basics", status: "Inactive" },
];

export default function StudentsPage() {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const [students, setStudents] = useState<Student[]>(initialStudents);

  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | StudentStatus>("All");

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    course: "",
    status: "Active" as StudentStatus,
  });
  const [formError, setFormError] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return students.filter((s) => {
      const matchesQuery =
        !query ||
        s.id.toLowerCase().includes(query) ||
        s.name.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query) ||
        s.course.toLowerCase().includes(query);

      const matchesStatus = statusFilter === "All" ? true : s.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [students, q, statusFilter]);

  const simulateLoad = async () => {
    setShowError(false);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
  };

  const addStudent = async () => {
    setFormError("");

    if (!form.id.trim() || !form.name.trim() || !form.email.trim() || !form.course.trim()) {
      setFormError("Please fill all fields.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (students.some((s) => s.id.toLowerCase() === form.id.trim().toLowerCase())) {
      setFormError("Student ID already exists.");
      return;
    }

    await simulateLoad();

    setStudents((prev) => [
      {
        id: form.id.trim().toUpperCase(),
        name: form.name.trim(),
        email: form.email.trim(),
        course: form.course.trim(),
        status: form.status,
      },
      ...prev,
    ]);

    setForm({ id: "", name: "", email: "", course: "", status: "Active" });
  };

  return (
    <main className="text-black">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Students</h1>
          <p className="mt-1 text-sm text-black/70">Search, filter, and add new students.</p>
        </div>

        <div className="flex gap-2">
          <button className="rounded-xl bg-[var(--blue-600)] px-4 py-2 text-sm font-bold text-white hover:opacity-95" onClick={simulateLoad}>
            Refresh
          </button>
          <button className="rounded-xl border px-4 py-2 text-sm font-bold hover:bg-[var(--blue-100)]" onClick={() => setShowError((v) => !v)}>
            Toggle Error
          </button>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          className="rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--border)]"
          placeholder="Search by ID / name / email / course..."
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
          <option value="Inactive">Inactive</option>
        </select>

        <div className="rounded-xl border bg-white px-4 py-3 text-sm">
          <span className="font-bold">{filtered.length}</span> result(s)
        </div>
      </div>

      {/* Add Form */}
      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-extrabold">Add Student</h2>
        <p className="mt-1 text-sm text-black/70">Dummy form with validation.</p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-5">
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="ID (e.g., S010)"
            value={form.id} onChange={(e) => setForm((p) => ({ ...p, id: e.target.value }))} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Name"
            value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Email"
            value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
          <input className="rounded-xl border px-3 py-2 text-sm" placeholder="Course"
            value={form.course} onChange={(e) => setForm((p) => ({ ...p, course: e.target.value }))} />
          <select className="rounded-xl border px-3 py-2 text-sm"
            value={form.status} onChange={(e) => setForm((p) => ({ ...p, status: e.target.value as StudentStatus }))}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {formError && <div className="mt-3 text-sm font-semibold text-red-700">{formError}</div>}

        <button
          className="mt-4 rounded-xl bg-[var(--blue-600)] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95"
          onClick={addStudent}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Student"}
        </button>
      </div>

      {/* States */}
      <div className="mt-6 space-y-4">
        {loading && <LoadingState label="Loading students..." />}
        {showError && <ErrorState subtitle="This is a demo error UI (toggle it off)." />}
        {!loading && !showError && filtered.length === 0 && <EmptyState title="No students found" />}
      </div>

      {/* Table */}
      {!loading && !showError && filtered.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--blue-100)]">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Course</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border)]">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-[var(--blue-100)]/40 transition">
                  <td className="p-4 font-bold">{s.id}</td>
                  <td className="p-4 font-bold">{s.name}</td>
                  <td className="p-4">{s.email}</td>
                  <td className="p-4">{s.course}</td>
                  <td className="p-4">
                    <span
                      className={
                        "rounded-full px-3 py-1 text-xs font-extrabold " +
                        (s.status === "Active" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900")
                      }
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}