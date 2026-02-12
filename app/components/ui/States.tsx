export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="rounded-xl border bg-white p-5 text-black shadow-sm">
      <div className="animate-pulse text-sm font-semibold">{label}</div>
    </div>
  );
}

export function EmptyState({
  title = "No results",
  subtitle = "Try changing your search or filters.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-5 text-black shadow-sm">
      <div className="text-lg font-bold">{title}</div>
      <div className="mt-1 text-sm text-black/70">{subtitle}</div>
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  subtitle = "Please try again.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-black shadow-sm">
      <div className="text-lg font-bold text-red-900">{title}</div>
      <div className="mt-1 text-sm text-red-900/80">{subtitle}</div>
    </div>
  );
}
