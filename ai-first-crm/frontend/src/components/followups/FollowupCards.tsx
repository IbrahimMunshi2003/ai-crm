interface Props {
  total: number;
}

export default function FollowupCards({
  total,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

      <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
        <p className="text-sm font-medium text-slate-500 tracking-wide">
          Pending
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          {total}
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
        <p className="text-sm font-medium text-slate-500 tracking-wide">
          Completed
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          0
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
        <p className="text-sm font-medium text-orange-600 tracking-wide">
          Overdue
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          0
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
        <p className="text-sm font-medium text-slate-500 tracking-wide">
          This Week
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
          {total}
        </h2>
      </div>

    </div>
  );
}