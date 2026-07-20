import { useState } from "react";

export default function DatabaseSettings() {
  const [database] = useState({
    engine: "PostgreSQL",
    host: "localhost",
    port: "5432",
    database: "ai_crm",
    username: "postgres",
    status: "Connected",
    totalRecords: 9,
    size: "18 MB",
  });

  const testConnection = () => {
    alert("Database Connected Successfully");
  };

  const backupDatabase = () => {
    alert("Database Backup Started");
  };

  const restoreDatabase = () => {
    alert("Restore Feature Coming Soon");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Database Settings
          </h2>

          <p className="text-gray-500 mt-1">
            PostgreSQL Connection & Database Health
          </p>

        </div>

        <div
          className={`px-4 py-2 rounded-full text-white ${
            database.status === "Connected"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {database.status}
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-medium mb-2">
            Database Engine
          </label>

          <input
            value={database.engine}
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Host
          </label>

          <input
            value={database.host}
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Port
          </label>

          <input
            value={database.port}
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Database Name
          </label>

          <input
            value={database.database}
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Username
          </label>

          <input
            value={database.username}
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Database Size
          </label>

          <input
            value={database.size}
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-50"
          />
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div className="bg-slate-100 rounded-xl p-5 text-center">

          <p className="text-gray-500">
            Total Records
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {database.totalRecords}
          </h2>

        </div>

        <div className="bg-slate-100 rounded-xl p-5 text-center">

          <p className="text-gray-500">
            Database Status
          </p>

          <h2 className="text-2xl font-bold mt-3 text-green-600">
            Healthy
          </h2>

        </div>

      </div>

      <div className="flex flex-wrap justify-end gap-4 mt-10">

        <button
          onClick={testConnection}
          className="px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Test Connection
        </button>

        <button
          onClick={backupDatabase}
          className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Backup Database
        </button>

        <button
          onClick={restoreDatabase}
          className="px-5 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
        >
          Restore
        </button>

      </div>

    </div>
  );
}