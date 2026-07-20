import { useState } from "react";

export default function AISettings() {
  const [settings, setSettings] = useState({
    provider: "Groq",
    model: "llama-3.3-70b-versatile",
    apiKey: "",
    temperature: 0.3,
    maxTokens: 1024,
    stream: true,
    saveHistory: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setSettings({
      ...settings,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const saveSettings = () => {
    alert("AI Settings Saved Successfully");
  };

  const testConnection = () => {
    alert("Connected Successfully");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          AI Configuration
        </h2>

        <p className="text-gray-500 mt-2">
          Configure the Large Language Model powering your CRM.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div>

          <label className="block mb-2 font-medium">
            AI Provider
          </label>

          <select
            name="provider"
            value={settings.provider}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Groq</option>
            <option>OpenAI</option>
            <option>Google Gemini</option>
            <option>Anthropic Claude</option>
            <option>OpenRouter</option>
          </select>

        </div>

        <div>

          <label className="block mb-2 font-medium">
            AI Model
          </label>

          <select
            name="model"
            value={settings.model}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>llama-3.3-70b-versatile</option>
            <option>llama-3.1-8b-instant</option>
            <option>gpt-4.1</option>
            <option>gemini-2.5-pro</option>
            <option>claude-4-sonnet</option>
          </select>

        </div>

        <div className="lg:col-span-2">

          <label className="block mb-2 font-medium">
            API Key
          </label>

          <input
            type="password"
            name="apiKey"
            value={settings.apiKey}
            onChange={handleChange}
            placeholder="Enter API Key"
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Temperature
          </label>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            name="temperature"
            value={settings.temperature}
            onChange={handleChange}
            className="w-full"
          />

          <p className="mt-2 text-sm text-gray-600">
            {settings.temperature}
          </p>

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Maximum Tokens
          </label>

          <input
            type="number"
            name="maxTokens"
            value={settings.maxTokens}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            name="stream"
            checked={settings.stream}
            onChange={handleChange}
          />

          Enable Streaming Responses

        </label>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            name="saveHistory"
            checked={settings.saveHistory}
            onChange={handleChange}
          />

          Save AI Conversation History

        </label>

      </div>

      <div className="flex justify-end gap-4 mt-10">

        <button
          onClick={testConnection}
          className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Test Connection
        </button>

        <button
          onClick={saveSettings}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}