export default function ProfilePage() {
  return (
    <main className="text-black">
      <h1 className="text-3xl font-extrabold">Profile</h1>
      <p className="mt-1 text-sm text-black/70">Your account overview.</p>

      <div className="mt-6 max-w-2xl rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-[var(--blue-100)] border border-[var(--border)] flex items-center justify-center font-extrabold text-xl">
            S
          </div>

          <div>
            <div className="text-xl font-extrabold">Shalika</div>
            <div className="text-sm text-black/70">Frontend Intern</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-[var(--blue-100)] border border-[var(--border)] p-4">
            <div className="text-xs font-bold text-black/60 uppercase">Role</div>
            <div className="mt-1 font-extrabold">Student</div>
          </div>

          <div className="rounded-xl bg-[var(--blue-100)] border border-[var(--border)] p-4">
            <div className="text-xs font-bold text-black/60 uppercase">Status</div>
            <div className="mt-2">
              <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-xs font-extrabold">
                Active
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-[var(--border)] p-4">
            <div className="text-xs font-bold text-black/60 uppercase">Email</div>
            <div className="mt-1 font-bold">shalikalakshani@example.com</div>
          </div>

          <div className="rounded-xl bg-white border border-[var(--border)] p-4">
            <div className="text-xs font-bold text-black/60 uppercase">University</div>
            <div className="mt-1 font-bold">SLIIT</div>
          </div>
        </div>
      </div>
    </main>
  );
}
