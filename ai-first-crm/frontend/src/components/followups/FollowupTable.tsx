import type { Followup } from "../../features/followups/followupTypes";

interface Props {
  data: Followup[];
}

export default function FollowupTable({
  data,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Doctor</th>

            <th className="p-4 text-left">Product</th>

            <th className="p-4 text-left">Date</th>

            <th className="p-4 text-left">Follow Up</th>

            <th className="p-4 text-left">Sentiment</th>

          </tr>

        </thead>

        <tbody>

          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">{row.doctor}</td>

              <td className="p-4">{row.product}</td>

              <td className="p-4">{row.date}</td>

              <td className="p-4">{row.followUp}</td>

              <td className="p-4">{row.sentiment}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}