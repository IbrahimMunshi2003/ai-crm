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
      title: "Total",
      value: overview.totalInteractions,
    },
    {
      title: "Positive",
      value: overview.positiveInteractions,
    },
    {
      title: "Neutral",
      value: overview.neutralInteractions,
    },
    {
      title: "Negative",
      value: overview.negativeInteractions,
    },
    {
      title: "Brochures",
      value: overview.brochuresShared,
    },
    {
      title: "Follow Ups",
      value: overview.pendingFollowups,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl bg-white shadow-md p-6 hover:shadow-xl transition"
        >
          <p className="text-gray-500">{card.title}</p>

          <h2 className="text-3xl font-bold mt-3">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}