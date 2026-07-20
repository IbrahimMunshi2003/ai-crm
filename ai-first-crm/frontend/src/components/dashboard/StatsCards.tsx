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
    return (
      <p className="text-center text-gray-500">
        Loading...
      </p>
    );
  }

  if (!stats) {
    return (
      <p className="text-center text-gray-500">
        No dashboard data available.
      </p>
    );
  }

  const cards = [
    {
      title: "Interactions",
      value: stats.totalInteractions,
    },
    {
      title: "Positive",
      value: stats.positiveInteractions,
    },
    {
      title: "Neutral",
      value: stats.neutralInteractions,
    },
    {
      title: "Negative",
      value: stats.negativeInteractions,
    },
    {
      title: "Follow Ups",
      value: stats.pendingFollowups,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
        >
          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-800">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}