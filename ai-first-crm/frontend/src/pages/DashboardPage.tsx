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
    },
    {
      title: "Interactions",
      value: "1,247",
      icon: Activity,
    },
    {
      title: "Follow Ups",
      value: "42",
      icon: CalendarClock,
    },
    {
      title: "AI Suggestions",
      value: "17",
      icon: Brain,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Overview
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Your CRM activity and AI insights at a glance.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {card.title}
                  </p>
                  <h2 className="text-3xl font-semibold text-slate-900 mt-2 tracking-tight">
                    {card.value}
                  </h2>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={20} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-primary text-sm font-medium">
                <TrendingUp size={16} />
                <span className="ml-1.5">+12% this month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Recent Activities
          </h2>
          <div className="mt-5 space-y-4">
            {[
              "Visited Dr Smith",
              "Shared Ozempic brochure",
              "Generated AI Summary",
              "Scheduled Follow-up",
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {item}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Today
                  </p>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            AI Insights
          </h2>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-primary">
                Positive Trend
              </p>
              <p className="text-xs mt-1.5 text-slate-600 leading-relaxed">
                Doctors showed higher engagement this week.
              </p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <p className="text-sm font-semibold text-orange-700">
                Follow-up Due
              </p>
              <p className="text-xs mt-1.5 text-orange-600/80 leading-relaxed">
                8 follow-ups should be completed this week.
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-700">
                Recommendation
              </p>
              <p className="text-xs mt-1.5 text-blue-600/80 leading-relaxed">
                Focus on HCPs with neutral sentiment to improve engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}