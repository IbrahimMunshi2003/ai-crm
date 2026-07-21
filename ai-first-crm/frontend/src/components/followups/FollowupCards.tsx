interface Props {
  total: number;
}

export default function FollowupCards({
  total,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          Pending
        </p>

        <h2 className="text-3xl font-bold">
          {total}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          Completed
        </p>

        <h2 className="text-3xl font-bold">
          0
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          Overdue
        </p>

        <h2 className="text-3xl font-bold">
          0
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          This Week
        </p>

        <h2 className="text-3xl font-bold">
          {total}
        </h2>
      </div>

    </div>
  );
}