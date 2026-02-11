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
    <main>
      <h1 className="text-2xl font-bold">Students</h1>
      <p className="mt-2 text-sm text-gray-600">Student list shown as a table.</p>

      <div className="mt-6 overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Course</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3">{s.id}</td>
                <td className="p-3 font-medium">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.course}</td>
                <td className="p-3">
                  <span
                    className={
                      "rounded-full px-3 py-1 text-xs font-medium " +
                      (s.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700")
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
