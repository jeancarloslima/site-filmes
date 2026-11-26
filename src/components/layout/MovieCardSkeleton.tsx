export default function MovieCardSkeleton() {
  return (
    <div className="flex flex-col w-full max-w-50 group bg-surface border rounded-lg overflow-hidden border-border animate-pulse">
      <div className="w-full aspect-2/3 bg-background rounded-t-xl border border-border"></div>

      <div className="flex flex-col flex-1 gap-3 p-4">
        <h2 className="h-7 bg-border rounded"></h2>
        <span className="h-5 flex items-center justify-between">
          <span className="block w-8 h-3 bg-border rounded"></span>
          <span className="block w-8 h-3 bg-border rounded"></span>
        </span>
      </div>

      <span className="block w-full h-10 mt-auto bg-border"></span>
    </div>
  );
}
