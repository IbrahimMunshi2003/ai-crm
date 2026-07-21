import type {
  AnalyticsOverview,
  Insight,
} from "../../features/analytics/analyticsTypes";

interface Props {
  overview: AnalyticsOverview;
  insights?: Insight | null;
}

export default function AnalyticsCards({
  overview,
}: Props) {
  const cards = [
    {
      title: "Total Interactions",
      value: overview.totalInteractions,
    },
    {
      title: "Positive Outcomes",
      value: overview.positiveInteractions,
    },
    {
      title: "Neutral Responses",
      value: overview.neutralInteractions,
    },
    {
      title: "Negative Responses",
      value: overview.negativeInteractions,
    },
    {
      title: "Brochures Shared",
      value: overview.brochuresShared,
    },
    {
      title: "Pending Follow Ups",
      value: overview.pendingFollowups,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white border border-[#E5E7EB] shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
        >
          <p className="text-sm font-medium text-slate-500 tracking-wide">{card.title}</p>

          <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}