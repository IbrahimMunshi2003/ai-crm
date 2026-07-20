import { useState } from "react";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    followups: true,
    aiReminders: true,
    dailySummary: false,
    weeklyReport: true,
    sound: true,
    quietHours: false,
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const saveSettings = () => {
    alert("Notification Settings Saved");
  };

  const settings = [
    {
      key: "email",
      title: "Email Notifications",
      description: "Receive CRM updates via email",
    },
    {
      key: "push",
      title: "Push Notifications",
      description: "Receive browser notifications",
    },
    {
      key: "followups",
      title: "Follow-up Reminders",
      description: "Notify when follow-up visits are due",
    },
    {
      key: "aiReminders",
      title: "AI Suggestions",
      description: "Receive AI-generated recommendations",
    },
    {
      key: "dailySummary",
      title: "Daily Summary",
      description: "Email daily interaction summary",
    },
    {
      key: "weeklyReport",
      title: "Weekly Analytics Report",
      description: "Receive weekly performance report",
    },
    {
      key: "sound",
      title: "Sound Alerts",
      description: "Play notification sounds",
    },
    {
      key: "quietHours",
      title: "Quiet Hours",
      description: "Disable notifications at night",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Notification Settings
        </h2>

        <p className="text-gray-500 mt-2">
          Control how the AI CRM communicates with you.
        </p>

      </div>

      <div className="space-y-5">

        {settings.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between border rounded-xl p-5 hover:bg-gray-50"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {item.description}
              </p>

            </div>

            <button
              onClick={() =>
                handleToggle(item.key as keyof typeof notifications)
              }
              className={`w-14 h-8 rounded-full transition ${
                notifications[item.key as keyof typeof notifications]
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`h-7 w-7 rounded-full bg-white transition transform ${
                  notifications[item.key as keyof typeof notifications]
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>

          </div>
        ))}

      </div>

      <div className="flex justify-end mt-10">

        <button
          onClick={saveSettings}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Notification Settings
        </button>

      </div>

    </div>
  );
}