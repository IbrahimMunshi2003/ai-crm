import {
  Users,
  Activity,
  CalendarClock,
  Brain,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export default function DashboardPage() {
  const cards = [
    {
      title: "Total HCPs",
      value: "248",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Interactions",
      value: "1,247",
      icon: Activity,
      color: "bg-green-500",
    },
    {
      title: "Follow Ups",
      value: "42",
      icon: CalendarClock,
      color: "bg-orange-500",
    },
    {
      title: "AI Suggestions",
      value: "17",
      icon: Brain,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back. Here's your CRM activity overview.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-lg transition"
            >
              <div className="flex justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {card.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-3">
                    {card.value}
                  </h2>

                </div>

                <div
                  className={`${card.color} h-14 w-14 rounded-xl flex items-center justify-center`}
                >
                  <Icon className="text-white" />
                </div>

              </div>

              <div className="mt-5 flex items-center text-green-600 text-sm">

                <TrendingUp size={16} />

                <span className="ml-2">
                  +12% this month
                </span>

              </div>

            </div>
          );
        })}

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 bg-white rounded-2xl border p-6 shadow-sm">

          <h2 className="font-semibold text-lg">
            Recent Activities
          </h2>

          <div className="mt-6 space-y-5">

            {[
              "Visited Dr Smith",
              "Shared Ozempic brochure",
              "Generated AI Summary",
              "Scheduled Follow-up",
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b pb-4"
              >
                <div>

                  <p className="font-medium">
                    {item}
                  </p>

                  <p className="text-sm text-slate-500">
                    Today
                  </p>

                </div>

                <ArrowUpRight className="text-slate-400" />

              </div>
            ))}

          </div>

        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <h2 className="font-semibold text-lg">
            AI Insights
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl bg-blue-50 p-4">

              <p className="font-semibold text-blue-700">
                Positive Trend
              </p>

              <p className="text-sm mt-2 text-slate-600">
                Doctors showed higher engagement this week.
              </p>

            </div>

            <div className="rounded-xl bg-green-50 p-4">

              <p className="font-semibold text-green-700">
                Follow-up Due
              </p>

              <p className="text-sm mt-2 text-slate-600">
                8 follow-ups should be completed this week.
              </p>

            </div>

            <div className="rounded-xl bg-purple-50 p-4">

              <p className="font-semibold text-purple-700">
                AI Recommendation
              </p>

              <p className="text-sm mt-2 text-slate-600">
                Focus on HCPs with neutral sentiment to improve engagement.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}