import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchDashboardStats } from "../../features/dashboard/dashboardSlice";

export default function StatsCards() {
  const dispatch = useAppDispatch();

  const { stats, loading } = useAppSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!stats) {
    return <p>No data</p>;
  }

  const cards = [
    {
      title: "Interactions",
      value: stats.totalInteractions,
    },
    {
      title: "Positive",
      value: stats.positive,
    },
    {
      title: "Neutral",
      value: stats.neutral,
    },
    {
      title: "Negative",
      value: stats.negative,
    },
    {
      title: "Follow Ups",
      value: stats.followups,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white shadow p-6"
        >
          <p className="text-sm text-gray-500">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}