import { useState } from "react";

export default function PreferenceSettings() {
  const [preferences, setPreferences] = useState({
    theme: "Light",
    language: "English",
    timezone: "Asia/Kolkata",
    dateFormat: "DD/MM/YYYY",
    fontSize: "Medium",
    autoSave: "5",
    accent: "Blue",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const savePreferences = () => {
    alert("Preferences Saved Successfully");
  };

  const resetPreferences = () => {
    alert("Preferences Reset");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Preferences
        </h2>

        <p className="text-gray-500 mt-2">
          Customize your CRM experience.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Theme
          </label>

          <select
            name="theme"
            value={preferences.theme}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Language
          </label>

          <select
            name="language"
            value={preferences.language}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Timezone
          </label>

          <select
            name="timezone"
            value={preferences.timezone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Asia/Kolkata</option>
            <option>UTC</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date Format
          </label>

          <select
            name="dateFormat"
            value={preferences.dateFormat}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Font Size
          </label>

          <select
            name="fontSize"
            value={preferences.fontSize}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Auto Save Interval
          </label>

          <select
            name="autoSave"
            value={preferences.autoSave}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="1">1 Minute</option>
            <option value="5">5 Minutes</option>
            <option value="10">10 Minutes</option>
            <option value="30">30 Minutes</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Accent Color
          </label>

          <select
            name="accent"
            value={preferences.accent}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Blue</option>
            <option>Green</option>
            <option>Purple</option>
            <option>Orange</option>
            <option>Red</option>
          </select>
        </div>

      </div>

      <div className="flex justify-end gap-4 mt-10">

        <button
          onClick={resetPreferences}
          className="px-6 py-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
        >
          Reset
        </button>

        <button
          onClick={savePreferences}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Save Preferences
        </button>

      </div>

    </div>
  );
}