import ProfileSettings from "../components/settings/ProfileSettings";
import AISettings from "../components/settings/AISettings";
import DatabaseSettings from "../components/settings/DatabaseSettings";
import PreferenceSettings from "../components/settings/PreferenceSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import AboutSettings from "../components/settings/AboutSettings";

export default function SettingsPage() {

  return (

    <div className="space-y-8 p-6">

      <div>

        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your CRM preferences and configuration.
        </p>

      </div>

      <ProfileSettings />

      <AISettings />

      <DatabaseSettings />

      <PreferenceSettings />

      <NotificationSettings />

      <SecuritySettings />

      <AboutSettings />

    </div>

  );

}