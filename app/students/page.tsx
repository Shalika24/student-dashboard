type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  status: "Active" | "Inactive";
};

const students: Student[] = [
  {
    id: "S001",
    name: "Nimal Perera",
    email: "nimal@gmail.com",
    course: "Web Development",
    status: "Active",
  },
  {
    id: "S002",
    name: "Kamal Silva",
    email: "kamal@gmail.com",
    course: "Database Systems",
    status: "Active",
  },
  {
    id: "S003",
    name: "Sahan Fernando",
    email: "sahan@gmail.com",
    course: "UI/UX Basics",
    status: "Inactive",
  },
];

export default function StudentsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-[#2A514C]">Students</h1>
      <p className="mt-2 text-sm text-[#2A514C]/80">
        Student list shown as a table.
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border-2 border-[#B67452] bg-[#B67452]/30 shadow-sm">
        <table className="w-full text-left text-sm text-[#2A514C]">
          {/* HEADER */}
          <thead className="bg-[#B67452]/40 font-bold">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Course</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-[#2A514C]/30">
            {students.map((s) => (
              <tr
                key={s.id}
                className="hover:bg-white/40 transition"
              >
                <td className="p-3 font-semibold">{s.id}</td>
                <td className="p-3 font-semibold">{s.name}</td>
                <td className="p-3">{s.email}</td>
                <td className="p-3">{s.course}</td>
                <td className="p-3">
                  <span
                    className={
                      "rounded-full px-3 py-1 text-xs font-bold " +
                      (s.status === "Active"
                        ? "bg-[#B6F7C1] text-[#1F6B3F]"
                        : "bg-[#F8B4B4] text-[#7A1F1F]")
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
