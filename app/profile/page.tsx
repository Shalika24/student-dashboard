export default function ProfilePage() {
  return (
    <main className="text-[#2A514C]">
      {/* Title */}
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-1 text-sm opacity-80">
        Your account overview.
      </p>

      {/* Profile Card */}
      <div className="mt-6 max-w-xl rounded-2xl border-2 border-[#B67452] bg-white p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-[#B67452]/20 flex items-center justify-center font-bold text-lg text-[#2A514C]">
            S
          </div>

          <div>
            <div className="font-semibold text-lg">Shalika</div>
            <div className="text-sm opacity-80">Frontend Intern</div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">

          {/* Role */}
          <div>
            <div className="text-xs uppercase tracking-wide opacity-70">
              Role
            </div>
            <div className="font-medium">Student</div>
          </div>

          {/* Status */}
          <div>
            <div className="text-xs uppercase tracking-wide opacity-70">
              Status
            </div>

            <span className="inline-block mt-1 rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
              Active
            </span>
          </div>

          {/* Email */}
          <div>
            <div className="text-xs uppercase tracking-wide opacity-70">
              Email
            </div>
            <div className="font-medium">
              shalikalakshani@example.com
            </div>
          </div>

          {/* University */}
          <div>
            <div className="text-xs uppercase tracking-wide opacity-70">
              University
            </div>
            <div className="font-medium">SLIIT</div>
          </div>

        </div>
      </div>
    </main>
  );
}
