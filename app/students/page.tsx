type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  status: "Active" | "Inactive";
};

const students: Student[] = [
  { id: "S001", name: "Nimal Perera", email: "nimal@gmail.com", course: "Web Development", status: "Active" },
  { id: "S002", name: "Kamal Silva", email: "kamal@gmail.com", course: "Database Systems", status: "Active" },
  { id: "S003", name: "Sahan Fernando", email: "sahan@gmail.com", course: "UI/UX Basics", status: "Inactive" },
];

export default function StudentsPage() {
  return (
    <main className="text-black">
      <h1 className="text-3xl font-extrabold">Students</h1>
      <p className="mt-1 text-sm text-black/70">Student list shown as a table.</p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--blue-100)]">
            <tr className="text-black">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Course</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--border)]">
            {students.map((s) => (
              <tr key={s.id} className="hover:bg-[var(--blue-100)]/40 transition">
                <td className="p-4 font-bold">{s.id}</td>
                <td className="p-4 font-bold">{s.name}</td>
                <td className="p-4">{s.email}</td>
                <td className="p-4">{s.course}</td>
                <td className="p-4">
                  <span
                    className={
                      "rounded-full px-3 py-1 text-xs font-extrabold " +
                      (s.status === "Active"
                        ? "bg-green-200 text-green-900"
                        : "bg-red-200 text-red-900")
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
    </main>
  );
}
