export interface SettingsState {
  loading: boolean;
  profile: Profile;
  ai: AIConfig;
  database: DatabaseConfig;
  preferences: Preferences;
  notifications: Notifications;
}

export interface Profile {
  name: string;
  email: string;
}

export interface AIConfig {
  provider: string;
  model: string;
  temperature: number;
}

export interface DatabaseConfig {
  status: string;
  database: string;
}

export interface Preferences {
  theme: string;
  language: string;
  timezone: string;
}

export interface Notifications {
  email: boolean;
  followups: boolean;
}