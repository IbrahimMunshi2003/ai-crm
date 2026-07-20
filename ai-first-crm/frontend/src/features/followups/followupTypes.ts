export interface Followup {
  id: number;
  doctor: string;
  date: string;
  product: string;
  followUp: string;
  sentiment: string;
}

export interface FollowupState {
  loading: boolean;
  error: string | null;
  followups: Followup[];
}