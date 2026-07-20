export interface AnalyticsOverview {
  totalInteractions: number;
  positiveInteractions: number;
  neutralInteractions: number;
  negativeInteractions: number;
  brochuresShared: number;
  pendingFollowups: number;
}

export interface ProductStat {
  product: string;
  count: number;
}

export interface DoctorStat {
  doctor: string;
  count: number;
}

export interface MonthlyStat {
  month: string;
  count: number;
}

export interface SentimentStat {
  name: string;
  value: number;
}

export interface Insight {
  total: number;
  positive: number;
  negative: number;
  followups: number;
}