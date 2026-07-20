import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import AnalyticsCards from "../components/analytics/AnalyticsCards";

import { fetchAnalytics } from "../features/analytics/analyticsSlice";

export default function AnalyticsPage() {
  const dispatch = useAppDispatch();

  const {
    loading,
    error,
    overview,
    insights,
  } = useAppSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-lg font-medium text-gray-500">
          Loading Analytics...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-red-500 text-lg">
          {error}
        </p>
      </div>
    );
  }

  if (!overview) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500 text-lg">
          No analytics data found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Real-time CRM insights powered by PostgreSQL & AI
        </p>
      </div>

      <AnalyticsCards
  overview={overview}
  insights={
    insights ?? {
      total: 0,
      positive: 0,
      negative: 0,
      followups: 0,
    }
  }
/>
      

      {/* Monthly Trend */}
      {/* <MonthlyChart data={monthly} /> */}

      {/* Product Performance */}
      {/* <ProductChart data={products} /> */}

      {/* Doctor Performance */}
      {/* <DoctorChart data={doctors} /> */}

      {/* Sentiment Distribution */}
      {/* <SentimentChart data={sentiments} /> */}

    </div>
  );
}